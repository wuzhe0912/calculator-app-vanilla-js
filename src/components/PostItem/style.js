import styled from 'styled-components';
import { Link } from 'gatsby';

const PostItemLink = styled(Link)`
  color: #8899a6;
  display: flex;
  text-decoration: none;
  &:hover {
    color: #1fa1f2;
  }
`;

const PostItemWrapper = styled.section`
  align-items: center;
  border-bottom: 1px solid #38444d;
  display: flex;
  padding: 2rem 3rem;
  width: 100%;
`;

const PostItemTag = styled.div`
  align-items: center;
  background: ${props => (props.background ? props.background : '#1fa1f2')};
  border-radius: 50%;
  color: #fff;
  display: flex;
  font-size: 1.3rem;
  font-weight: 700;
  justify-content: center;
  min-height: 100px;
  min-width: 100px;
`;

const PostItemInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 1.5rem;
`;

const PostItemDate = styled.time`
  font-size: 0.9rem;
`;

const PostItemTitle = styled.h1`
  font-size: 1.6rem;
  font-weight: 700;
  margin: 0.2rem 0 0.5rem;
`;

const PostItemDescription = styled.p`
  font-size: 1.2rem;
  font-weight: 300;
  line-height: 1.2;
`;

export {
  PostItemLink,
  PostItemWrapper,
  PostItemTag,
  PostItemInfo,
  PostItemDate,
  PostItemTitle,
  PostItemDescription,
};
