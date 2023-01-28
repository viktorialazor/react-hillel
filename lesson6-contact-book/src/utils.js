export function getFirstAndLastName(userName) {
  let fullName = userName
    .replace("Ms. ", "")
    .replace("Mrs. ", "")
    .replace("Miss. ", "")
    .replace("Mr. ", "");

  const firstName = fullName.slice(0, fullName.indexOf(" "));
  const lastName = fullName.slice(fullName.indexOf(" ") + 1, fullName.length);

  return {
    firstName,
    lastName,
  };
}
