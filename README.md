# 코딩테스트 제출용 프로젝트입니다

# 프로젝트 실행방법

```c

yarn  <- node-modules 설치 후
yarn start  <- 프로젝트 실행

```

# 사용한 프레임워크 및 라이브러리

- 프레임워크

  - ![reactImg](https://user-images.githubusercontent.com/93029270/235029228-2c66a41b-1b8d-4c06-85f9-7312d626bba5.svg)

- 라이브러리
  - ![typescriptimg](https://user-images.githubusercontent.com/93029270/235030203-26eb8f68-1060-430c-ac4f-287e7b722be6.svg)
  - ![react-router-dom](https://user-images.githubusercontent.com/93029270/235032364-74bd8ab7-8ca2-4e4f-ad30-46e9d609c897.svg)
  - ![reacticons](https://user-images.githubusercontent.com/93029270/235030608-59a2d88f-70f2-4dab-9a30-22e41f7128c6.svg)
  - ![redux](https://user-images.githubusercontent.com/93029270/235032152-b10c6801-5b5c-4abd-a5dc-b3d104ef9a16.svg)
  - ![redux_toolkit](https://user-images.githubusercontent.com/93029270/235030906-9d734c2e-e22b-4e7b-b120-5cdf0c5f7740.svg)

# 컴포넌트 구조 및 역활

| 폴더              | 이름      | 역활                                                                                          |
| ----------------- | --------- | --------------------------------------------------------------------------------------------- |
| src               | until     | components에서 공통으로 사용되는 함수들을 모아둔 파일입니다                                   |
| pages             | 각파일들  | App.tsx에서 route에 따라 렌더링되는 페이지들을 나눈 폴더입니다                                |
| components        | 각파일들  | App에서 공통으로 사용하는 컴포넌트들입니다                                                    |
| components/home   | 각파일들  | Home 페이지 내에서 사용하는 컴포넌트들입니다                                                  |
| reduxstore        | hooks     | state와 dispatch를 매번 길개 작성하지않도록 custom hookd으로 만들어 관리합니다                |
| reduxstore        | store     | redux에서 state와 dispatch할 함수들을 가지는 저장소 역할을 합니다                             |
| reduxstore/slices | userSlice | 기존 redux의 action과 reducer 외에도 다른 방식으로 상태를 관리할 수 있는 곳입니다             |
| styles            | 각파일들  | style을 따로 관리해주는 라이브러리를 사용하지 않고 import 하여 사용하기위한 .css 파일들입니다 |

# 각 파일들 설명

- src/index

  - react-redux에 내장되어있는 Provider를 사용하여 state와 dispatch 가 담긴 저장소를 연결시켜줬습니다
  - 동적인 페이지 사용을 위한 BrowserRouter로 App 컴포넌트를 감싸주었습니다

- src/App

  - react에 내장되어있는 lazy 와 Suspense 를 사용하여 fetch로 가져온 데이터가 로딩되었을경우 데이터를 보여주고 없을경우 Suspense의 fallback안에 작성된 글을 보여줬습니다
  - react에 내장되어있는 useState를 활용하여 titleNumber를 선언하고 titleNumber에따른 삼항연산자를 활용하여 titleNumber가 0이고 현재 페이지가 Home일경우 title을 메인페이지로 바꿉니다 앞의 조건이 아닐경우 상세페이지를 보여줍니다
  - 공통으로 사용되는 Header와 Footer를 사용해주고 Footer의 경우 titlerNumber가 1일경우에만 렌더링하게 해줬습니다
  - react-router-dom 의 Routes 와 Route를 활용하여 HomePage의 경우 기본주소인 http://localhost:3000/ 으로 DetailPage의 경우 http://localhost:3000/:id 의 위치로 페이지가 나오게해줬습니다

- src/until

  - 함수 calculateAge 선언하고 매개변수로 patDob 과 inptData를 받습니다 (patDob: 문자열, inptData: 문자열 )
  - patDob의 처음 2글자와 마지막 2글자를 잘라서 각각 변수에 선언해두고 현재 연도를 가져오는 변수를 선언해줍니다
  - patDob의 마지막 글자를 가져와서 숫자로 변환후 이 글자에 2를 나눠 0이 나온다면 짝수 1이 남는다면 홀수로 나눠 짝수의 경우 여자 홀수의 경우 남자로 구분하여 gender에 할당합니다
  - patDob의에 처음 2글자를 담은 변수 age를 활용하여 숫자로 치환후 23보다 클경우 숫자19와문자열 age 1900 연도로 변환해주던가 아닐경우 2000 연도로 변환해준후 현재 연도 - 1900 이나 현재연도 - 2000으로 만들어 19/남과 같은형식으로 answer에 할당합니다
  - switch 문을 사용하여 inputData의 문자열이 전체일경우 answer을 반환해주고 나이일 경우 ageDate를 반환해주고 성별일경우 gender를 반환해줍니다

  - 함수 revDateFunc 선언하고 매개변수로 RevDate를 받습니다 (RevDate: 문자열)
  - RevDate를 잘라서 앞의 4글자는 연도 중간 2글자는 월 마지막 2글자는 일로 각각 변수에 할당합니다
  - 선언된 answer 변수에 각각의 연도 , 월 , 일 을 할당하고 문자열 년원일을 추가하여 answer을 반환해줍니다

- src/pages/Home

  - Home.tsx의 경우 3칸으로 나뉩니다

    - 왼쪽 : 상단에 광고 공간 인 Advertisement 하단에 Momo 컴포넌트가 있습니다
    - 중간 : 손님을 체크하는 컴포넌트가 있습니다
    - 오른쪽의 경우 중간에서 선택한 손님중 검색을 하여 체크해볼수있는 컴포넌트가 있습니다

  - Home.tsx에서 사용할 HomeType을 선언해주고 각 useState에 맞는 타입을 지정해줍니다
  - Home.tsx의 경우 props로 setTitleNumber를 받아 useEffect를 활용하여 Home화면이 렌더링됬을경우 titleNumber를 0으로 만들어줍니다
  - api 문서에 작성된 query data 형식에 맞추기위해 useState를 만들어주고 dateState 와 setDateState를 props로 내려줘 상태끌어올리기를 사용합니다
  - 함수 handleChangeDate 를 만들어주고 Guest에 porps로 함수를 내려줘 사용자가 달력에서 클릭한 연월일을 가져옵니다
  - 상태끌어올리기를 사용하여 dateState가 빈문자열이아닌경우 문자열 "-"를 자른다음 붙여서 query data 형식에맞춰 dispatch를 사용합니다 ( 전역상태관리하는 store의 users를 업데이트시켜줍니다 )
  - useEffect를 활용하여 Home화면이 렌더링됬을경우 dispatch를 사용하여 함수 getImg를 실행시킵니다 ( 전역상태관리하는 store의 imgs를 업데이트시켜줍니다 )
  - useEffect의 종속배열은 dateState를 주시하고있습니다 ( update 될때마다 리렌더링 일어납니다 )

- src/pages/Detail

  - Home화면 중간에서 손님을 클릭했을경우 넘어와지는 상세페이지입니다
  - Guest 컴포넌트에서 react-router-dom의 useNavigate를 활용하여 http://localhost:3000의 손님의 userid의 번호로 이동됩니다
  - Home화면에서 dispatch를 활용하여 users를 업데이트 시켰기때문에 상세페이지에서도 useSelector를 활용하여 store에 접근해서 사용자의 정보를 가져올수있습니다
  - react-router-dom의 useParams를사용하여 :id의 값을 가져온후 useSelector를 사용한 getUserdata에 filter 메서드를 사용하여 같은 값을 찾습니다
  - 위의 배열에 map메서드를 사용하여 요구사항에 요구하는 조건에 맞춰 반환시켜줍니다
  - 전체일자가 필요한 경우 revDateFunc함수를 활요하여 보여주고
  - 필터된 배열에 map메서드의 값 과 성별 및 나이등 필요한조건에 따라 calculateAge함수를 활용하여 보여줍니다

- src/components/Header

  - 과제에서 보여준 화면을 그대로 만들어 봤습니다

- src/components/Footer

  - 과제에서 보여준 화면을 그대로 만들어 봤습니다
  - Footer의 경우 메인페이지에서는 필요하지않아서 window.location.pathname을 활용하여 메인페이지의 경우 아무것도 반환되지않게하였습니다

- src/components/home/Advertisement

  - 무한 캐러셀을 만들기위해 index값을 가져오는 useState를 만들고 useRef의 current속성을 활용하여 transition과 transform을 적용해줍니다
  - store의 imgs 가져오기위해 useSelector인 useAppSelector를 활용합니다
  - useEffect를 사용하고 setTimeout을 활용하여 3초마다 이미지를 이동시켜줍니다
  - index가 1씩증가하며 indexrk imgData의 길이와 비슷할경우 index가 0으로 되게 만들어줍니다
  - useEffect의 경우 index를 주시하고있으며 index가 변화될시 리렌더링이 일어납니다
  - 요소의 경우 store에서 img를 가져오는 getImgdata 를 map을돌려 요구사항에 맞게 배치해줍니다

- src/components/home/Memo

  - MemoArrayType을 선언해주고 필요한 데이터들의 타입을 선언해줍니다
  - memoData의 배열이 담긴 memoData와 숫자형태인 count, 사용자가 수정한 message가 담긴 updateMessage 를 useState로 선언해줍니다

  - onSubmit함수

    - onSubmit함수의 경우 Memo 컴포넌트에서 폼데이터로 감싼 첫번째 button 추적하여 버튼 클릭시 formDate에 정보들을 불러올수있습니다
    - e.currentTarget으로 사용자가 입력한 데이터를 가져온뒤 get메소드를 사용하여 입력하고 버튼을누른 메세지를 가져옵니다
    - 변수 writeDatas를 선언하고 message의 경우 사용자가 작성한 메세지, id의 경우 1, checkUpdate 의 경우 false를 선언해줍니다
    - 변수 messageDat를 선언하여 객체형태인 writeDatas를 배열로 감싸 할당합니다
    - 조건문을 사용하여 localStorage.getItem("message")가 null이 아닐경우 변수 original 선언하고 JSON.parse를 사용하여 localStorage.getItem("message")를 할당합니다
    - writeDatas 를 재선언하여 message의 경우 사용자가 작성한 메세지 , id의 경우 original의 길의에 1을 더해주고 checkUpdate의 경우 false를 선언해줍니다
    - 조건문을 사용하여 original이 있을경우 messageDatas 배열안에 writeDatas, 스프레드문법을 사용하여 original을 펼쳐 할당해줍니다
    - localStorage.setItem을 사용하여 message라는 키값으로 messageDatas 를 로컬스토리지에 추가해줍니다
    - setCount를 사용하여 count를 업데이트시켜줍니다 ( useEffect에서 리렌더링 시켜주기위해 사용함 )

  - deleteFunc함수

    - 매개변수로 e와 id를 받아 e에 stopPropagation 사용하여 상위 엘리먼트들로의 이벤트 전파를 막습니다
    - memoData에 filter를 사용하여 매개변수로 받은 id와 일치하지 않는 배열을 반환시켜주고 이 배열을 localData에 재할당합니다
    - localStorage.setItem을 하여 키가 message인 데이터를 localData에 로 변경시켜줍니다
    - setCount를 사용하여 count를 업데이트시켜줍니다 ( useEffect에서 리렌더링 시켜주기위해 사용함 )

  - updateStateFunc ,updateFunc 함수

    - updateStateFunc 함수의 경우 memoData에 filter메서드를 사용하여 사용자가 클릭한 memoData의 checkUpdate를 true로 변환시켜서 localStorage에 저장시켜준것입니다
    - updateFunc 함수의 경우 memoData에 filter메서드를 사용하여 memoData의 checkUpdate를 false로 바꿔주고 사용자가 입력한 message를 업데이트 시켜서 localStorage에 저장시켜준것입니다

  - onChangeUpdateFunc 함수

    - onChange를 활용하여 사용자가 입력한 값을 가져오는 역할을 합니다

  - useEffect를 활용하여 localStorage.getItem("message")의 값이 null이 아닐경우 setMemoData를 활용하여 JSON.parse(localStorage.getItem("message"))로 업데이트시켜줍니다
  - 메모의 경우 memoData에 map 메소드를 사용하여 요구사항에 맞게 배치해줍니다

- src/components/home/Guest

  - props로 dateState,handleChangeDate,filterSame, setFilterSame등을 받아 상태끌어올리기를사용합니다
  - useNavigate 사용하여 이동을 시켜줍니다
  - Home화면에서 dispatch를 활용하여 users를 업데이트 시켰기때문에 상세페이지에서도 useSelector를 활용하여 store에 접근해서 사용자의 정보를 가져올수있습니다
  - filterSame가 있을경우 getUserdata에 filter를 사용하여 같지 않은 배열을 찾아냅니다
  - useEffect를 사용하여 getUserdata가 있을경우 setFilterSame을 활용하여 getUserdata로 업데이트시켜줍니다
  - Guest 의 경우 filterSame 과 notFilter 가 있을경우 filterSame은 true에 notFilter은 false에 각 map메소드를 사용하여 요구사항에 맞게 배치해줍니다
  - filterSame 과 notFilter 이 없을경우 getUserdata에 map메소드를 사용하여 요구사항에 맞게 배치해줍니다

- src/components/home/GuestFilter

  - selectbox의 옵션값을 가져오기위해 optionValue선언하고 OPTIONS의 배열을 선언후 value와 name을 만들어줍니다
  - Home화면에서 dispatch를 활용하여 users를 업데이트 시켰기때문에 상세페이지에서도 useSelector를 활용하여 store에 접근해서 사용자의 정보를 가져올수있습니다
  - filterData를 만들어줘서 검색한 users의 데이터만 가져올수있게 만들어줍니다

  - checkValue함수

    - optionValue가 비어있으면 setOptionValue를 사용하여 optionValue를 name으로 업데이트시켜줍니다
    - 위조건이 아닌경우 setOptionValue를 사용하여 optionValue에 e.target.value로 업데이트시켜줍니다

  - searchFunc함수

    - getUserdata데이터가 있을 경우로 조건을잡습니디
      - optionValue가 name , birthdate,phone 인경우 각조건에 맞게 setFilterData를 사용하여 fiterData를 getUserdata데이터에 필터메서드를 사용하여 item.name 같은 e.currentTarget.value 로 할당해줍니다

  - useEffect를 사용하여 optionValue가 비어있을경우 setOptionValue를 사용하여 optionValue를 name으로 업데이트시켜줍니다
    - filterData가 있다면 setFilterSame을 사용하여 filterSame을 filterData로 업데이트시켜줍니다
  - 요구사항에 맞게 배치하며 찾는 게스트의 경우 filterData에 map메소드를 사용하여 맞게 배치합니다
