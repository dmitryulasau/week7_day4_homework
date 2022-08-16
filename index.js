import { registerUser, editUser, deleteUser } from "./api/apiUser.js";
import { getUser } from "./api/apiBasicAuth.js";
import { getBook } from "./api/apiItem.js";
import { CancelToken } from "apisauce";

// CHANGE TOKEN WHEN USER DELETED
const token = "8QDSMvvQUpsOhgulyQyKWark5G4TdgBVEKGbd01z17c";

const source = CancelToken.source();

// REGISTRATION
const newUser = async (cancelToken) => {
  const user = {
    email: "ross@friends.com",
    first_name: "Ross",
    last_name: "Geller",
    password: "123",
  };
  const { error } = await registerUser(user, cancelToken);
  console.log(error ? error : "Registration successful!");
};

// LOGIN
const login = async (cancelToken) => {
  let email = "ross@friends.com";
  let password = "123";
  const { user, error } = await getUser(email, password, cancelToken);
  console.log(error ? error : "Logged in!");
  console.log(user);
};

// EDIT USER
const updateUser = async (cancelToken) => {
  const newData = {
    first_name: "Teranoross",
  };
  const { error } = await editUser(token, newData, cancelToken);
  console.log(error ? error : "Edited!");
};

// DELETE USER
const removeUser = async (cancelToken) => {
  const { error } = await deleteUser(token, cancelToken);
  console.log(error ? error : "User vanished!");
};

// DISPLAY A BOOK
const book = async (cancelToken) => {
  const { book, error } = await getBook(50, cancelToken);
  console.log(error ? error : "Got it!");
  console.log(book);
};

// TESTS
// newUser(source.token);
// login(source.token);
// updateUser(source.token);
// removeUser(source.token);
// book(source.token);
