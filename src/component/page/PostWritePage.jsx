import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import TextInput from "../ui/TextInput";
import Button from "../ui/Button";

const Wrapper = styled.div`
  padding: 16px;
  width: calc(100% - 32px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Container = styled.div`
  width: 100%;
  max-width: 720px;
  & {
    :not(:last-child) {
      margin-bottom: 16px;
    }
  }
`;

function PostWritePage() {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  return (
    <Wrapper>
      <Container>
        <TextInput 
          height={20}
          value={title}
          placeholder="제목을 입력하세요"
          onChange={(event) => setTitle(event.target.value)}
        />
        <TextInput 
          height={480}
          value={content}
          placeholder="내용을 입력하세요"
          onChange={(event) => setContent(event.target.value)}
        />
        <Button
          title="글 작성하기"
          onClick={() => {
            // 저장 후 메인 페이지로 이동 (추후 저장 기능 구현 필요)
            navigate("/");
          }}
        />
      </Container>
    </Wrapper>
  );
}

export default PostWritePage;
