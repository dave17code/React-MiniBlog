import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import CommentList from "../list/CommentList";
import TextInput from "../ui/TextInput";
import Button from "../ui/Button";
import data from "../../data.json";

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
`;

const PostContainer = styled.div`
  padding: 8px 16px;
  border: 1px solid gray;
  border-radius: 8px;
`;

const TitleText = styled.p`
  font-size: 28px;
  font-weight: 500;
`;

const ContentText = styled.p`
  font-size: 20px;
  line-height: 32px;
  white-space: pre-wrap;
`;

const CommentLabel = styled.p`
  font-size: 16px;
  font-weight: 500;
`;

function PostViewPage() {
  const navigate = useNavigate();
  const { postId } = useParams();

  // postId에 해당하는 데이터를 찾아서 post에 저장
  const post = data.find((item) => item.id == postId);

  const [comment, setComment] = useState("");

  // post가 없으면 "존재하지 않는 포스트"를 보여줌
  if (!post) {
    return (
      <Wrapper>
        <Container>
          <p>존재하지 않는 포스트입니다.</p>
          <Button
            title="뒤로 가기"
            onClick={() => navigate("/")}
          />
        </Container>
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <Container>
        <Button
          title="뒤로 가기"
          onClick={() => navigate("/")}
        />
        <PostContainer>
          <TitleText>{post.title}</TitleText>
          <ContentText>{post.content}</ContentText>
        </PostContainer>

        <CommentLabel>댓글</CommentLabel>
        <CommentList comments={post.comments || []} />
        <TextInput
          height={40}
          value={comment}
          onChange={(event) => setComment(event.target.value)}
        />
        <Button
          title="댓글 작성하기"
          onClick={() => navigate("/")}
        />
      </Container>
    </Wrapper>
  );
}

export default PostViewPage;