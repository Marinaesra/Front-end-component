export const doLoginBack = async (loginInfo) => {
  const response = await fetch("http://localhost:3000/", {
    method: "POST",
    headers: {
      "content-type": "Application/json",
    },
    body: JSON.stringify({
      email: loginInfo.email,
      password: loginInfo.password,
    }),
  });
  const res = await response.json();
  return res;
};

export const createUser = async (newUser) => {
  const res = await fetch("http://localhost:3000/register", {
    method: "POST",
    headers: {
      "content-type": "Application/json",
    },
    body: JSON.stringify(
      newUser
    ),
  });
  const result = await res.json();
  return result.user;
};

export const addProductToCart = async (userId, productId) => {
  const res = await fetch("http://localhost:3000/addProduct", {
    method: "PUT",
    headers: {
      "content-type": "Application/json",
    },
    body: JSON.stringify({
      userId,
      productId,
    }),
  });
  const result = await res.json();
  return result;
};

export const modifyUser = async (user, token) => {
  const res = await fetch(`http://localhost:3000/modify/${user._id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      "auth-token": token
    },
    body: JSON.stringify(
      user
    ),
  });
  const result = await res.json();
  const userModified = result.user
  return userModified; 
};

export const userDelete = async (userId, token) => {
  const res = await fetch(`http://localhost:3000/delete/${userId}`, {
    method: "DELETE",
   headers: {
      "Content-Type": "application/json",
      "auth-token": token
    }, 
  });

  const result = await res.json();
  return result;
};
