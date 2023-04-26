import React, { useEffect, useState } from "react";
import "../styles/Memo.css";
interface MemoType {
  message: string;
}
interface MomoArrayType {
  memoData: MemoType[];
  setMemoData: React.SetStateAction<MemoType[]>;
}
function Memo() {
  const [memoData, setMemoData] = useState(
    JSON.parse(localStorage.getItem("message") || "")
  );
  const [count, setCount] = useState<number>(0);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const writeMessage = formData.get("message") as string;

    if (localStorage.getItem("message") !== null) {
      var original = JSON.parse(localStorage.getItem("message") || "");
    }
    let messageData = [writeMessage];
    if (original) {
      messageData = [writeMessage, ...original];
    }
    localStorage.setItem("message", JSON.stringify(messageData));
    setCount(Date.now());
  };
  useEffect(() => {
    setMemoData(JSON.parse(localStorage.getItem("message") || ""));
  }, [count]);
  return (
    <form onSubmit={onSubmit} className="MemoWrapper">
      {memoData?.map((item: string, idx: number) => (
        <div key={idx}>{item}</div>
      ))}
      <div>
        <input placeholder="메세지 입력" name="message" />
        <button>작성</button>
      </div>
    </form>
  );
}

export default Memo;
