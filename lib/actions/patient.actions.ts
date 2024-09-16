"use server";

import { ID, Query } from "node-appwrite";
import { users } from "../appwrite.config";
import { parseStringify } from "../utils";

export const createUser = async (user: CreateUserParams) => {
    try {
      // Try creating the user
      const newUser = await users.create(
        ID.unique(),
        user.email,
        user.phone,
        undefined,
        user.name
      );
      console.log("New user created:", newUser);
  
      return parseStringify(newUser);
    } catch (error: any) {
      console.log("Error while creating user:", error);
  
      if (error?.code === 400) {
        console.log("User already exists, fetching existing user by email...");
  
        const documents = await users.list([Query.equal("email", [user.email])]);
  
        if (documents?.users?.length > 0) {
          console.log("Existing user found:", documents.users[0]);
          return documents.users[0];  // Return existing user
        } else {
          console.log("No user found with that email.");
        }
      }
      
      // Return undefined if no user is created or found
      return undefined;
    }
  };
  
