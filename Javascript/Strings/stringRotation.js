// Check if one string is a rotation of the other string

function stringRotation(str1, str2) {
  let s3 = str1 + str1;
  return s3.indexOf(str2) != -1;
}

// stringRotation('water','erwat')
