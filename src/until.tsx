export const calculateAge = (patDob: string, inputData: string) => {
  let answer = "";
  let age = patDob.slice(0, 2);
  let nowDate = new Date().getFullYear();
  let genderDate = Number(patDob?.split("-").slice(1));
  let gender = "";
  if (genderDate % 2 === 0) {
    gender = "여";
  } else {
    gender = "남";
  }
  let ageDate = "";
  if (Number(age) > 23) {
    ageDate = String(nowDate - Number(19 + age));
  } else {
    ageDate = String(nowDate - Number(20 + age));
  }
  answer = gender + " " + "/" + " " + ageDate;
  switch (inputData) {
    case "전체":
      return answer;
    case "나이":
      return ageDate;
    case "성별":
      return gender;
  }
};

export const revDateFunc = (RevDate: string) => {
  let answer = "";
  let year = RevDate.split("").slice(0, 4).join("");
  let month = RevDate.split("").slice(5, 6).join("");
  let day = RevDate.split("").slice(6).join("");
  console.log(year + "년" + month + "월" + day + "일");
  answer = year + " 년 " + month + " 월 " + day + " 일 ";
  return answer;
};
