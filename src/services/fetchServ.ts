export const getAllUID = async (userId: String) => {
  const res = await fetch(`http://localhost:3000/api/recipes/${userId}`);
  const temp = await res.json();
  return temp;
};
