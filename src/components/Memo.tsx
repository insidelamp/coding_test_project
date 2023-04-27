import React, { useEffect, useState } from "react";
import "../styles/Memo.css";

interface MemoArrayType {
  message: string;
  id: number;
  checkUpdate: boolean;
}
function Memo() {
  const [memoData, setMemoData] = useState<MemoArrayType[]>([]);
  const [count, setCount] = useState<number>(0);
  const [updateMessage, setUpDateMessage] = useState<string>("");
  let localData: MemoArrayType[] = [];

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let writeDatas = {};
    const formData = new FormData(e.currentTarget);
    const writeMessage = formData.get("message") as string;

    writeDatas = {
      message: writeMessage,
      id: 1,
      checkUpdate: false,
    };
    let messageData = [writeDatas];

    if (localStorage.getItem("message") !== null) {
      var original = JSON.parse(localStorage.getItem("message") || "");
      writeDatas = {
        message: writeMessage,
        id: original.length + 1,
        checkUpdate: false,
      };
    }
    if (original) {
      messageData = [writeDatas, ...original];
    }
    localStorage.setItem("message", JSON.stringify(messageData));
    setCount(Date.now());
  };

  const deleteFunc = (id: number) => {
    localData = memoData.filter((el) => el.id !== id);
    localStorage.setItem("message", JSON.stringify(localData));
    setCount(Date.now());
  };

  const updateStateFunc = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>,
    id: number
  ) => {
    e.preventDefault();
    let filterData = memoData.filter((el) => el.id === id);
    let indexData = memoData.findIndex((data) => data.id === filterData[0].id);
    if (indexData === 0) {
      filterData = [
        {
          id: filterData[0].id,
          message: filterData[0].message,
          checkUpdate: true,
        },
        ...memoData.slice(indexData + 1, memoData.length),
      ];
    } else {
      filterData = [
        ...memoData.slice(0, indexData),
        {
          id: filterData[0].id,
          message: filterData[0].message,
          checkUpdate: true,
        },
        ...memoData.slice(indexData + 1, memoData.length),
      ];
    }

    localStorage.setItem("message", JSON.stringify(filterData));
    setCount(Date.now());
  };
  const onChangeUpdateFunc = (e: any) => {
    setUpDateMessage(e.target.value);
  };

  const updateFunc = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>,
    id: number
  ) => {
    e.stopPropagation();
    let filterUpData = memoData.filter((el) => el.id === id);
    let indexData = memoData.findIndex(
      (data) => data.id === filterUpData[0].id
    );
    if (indexData === 0) {
      if (updateMessage != "") {
        filterUpData = [
          {
            id: filterUpData[0].id,
            message: updateMessage,
            checkUpdate: false,
          },
          ...memoData.slice(indexData + 1, memoData.length),
        ];
      } else {
        filterUpData = [
          {
            id: filterUpData[0].id,
            message: filterUpData[0].message,
            checkUpdate: false,
          },
          ...memoData.slice(indexData + 1, memoData.length),
        ];
      }
    } else {
      if (updateMessage != "") {
        filterUpData = [
          ...memoData.slice(0, indexData),
          {
            id: filterUpData[0].id,
            message: updateMessage,
            checkUpdate: false,
          },
          ...memoData.slice(indexData + 1, memoData.length),
        ];
      } else {
        filterUpData = [
          ...memoData.slice(0, indexData),
          {
            id: filterUpData[0].id,
            message: filterUpData[0].message,
            checkUpdate: false,
          },
          ...memoData.slice(indexData + 1, memoData.length),
        ];
      }
    }
    localStorage.setItem("message", JSON.stringify(filterUpData));
    setCount(Date.now());
  };

  useEffect(() => {
    if (localStorage.getItem("message") !== null) {
      localData = JSON.parse(localStorage.getItem("message") || "");
      setMemoData(localData);
    }
  }, [count]);
  return (
    <form onSubmit={onSubmit} className="MemoWrapper">
      <div className="MemoList">
        {memoData?.map((item: MemoArrayType) => (
          <div
            className="MemoContentSpace"
            key={item.id}
            onClick={(e) => updateStateFunc(e, item.id)}
          >
            <div>메모</div>
            {item.checkUpdate ? (
              <div className="MemoInputSpace">
                <input
                  onChange={onChangeUpdateFunc}
                  defaultValue={item.message}
                />
                <div
                  className="MemoUpdateBtn"
                  onClick={(e) => updateFunc(e, item.id)}
                >
                  수정 완료
                </div>
              </div>
            ) : (
              <div className="MemoInputSpace">
                <div>{item.message}</div>
                <div
                  className="MemoUpdateBtn"
                  onClick={() => deleteFunc(item.id)}
                >
                  X
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="MemoBtnSpace">
        <input
          className="MemoPlusInput"
          placeholder="메세지 입력"
          name="message"
        />
        <button className="MemoPlusBtn">작성</button>
      </div>
    </form>
  );
}

export default Memo;
