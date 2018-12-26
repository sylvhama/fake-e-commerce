import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Footer from './Footer';
import Container from '../shared/Container';
import Button from '../shared/Button';

import Like from '../../svg/like.svg';
import Comment from '../../svg/comment.svg';

const StyledContainer = styled(Container)`
  margin-bottom: ${props => props.theme.size.footer};
`;

const Back = styled.button`
  border: none;
  background: none;
  font-size: ${props => props.theme.font.h1};
  cursor: pointer;
`;

const Flex = styled.div`
  display: flex;
  justify-content: ${props => props.justify || 'center'};
  align-items: center;
  flex-wrap: wrap;
`;

const Name = styled.h2`
  padding-left: ${props => props.theme.spacing.reg};
  font-size: ${props => props.theme.font.h2};
  font-weight: bold;
  text-align: center;
  flex: 1;
`;

const SmallName = styled.p`
  padding-bottom: ${props => props.theme.spacing.lg};
  font-size: ${props => props.theme.font.p};
`;

const Img = styled.img`
  max-width: 100%;
  margin: ${props => props.theme.spacing.reg} auto
    ${props => props.theme.spacing.sm};
  display: block;
`;

const StyledButton = styled(Button)`
  margin-bottom: ${props => props.theme.spacing.reg};
  display: flex;
  justify-content: center;
  align-items: center;

  & svg {
    margin-right: ${props => props.theme.spacing.sm};
  }
`;

const Count = styled.p`
  margin-bottom: ${props => props.theme.spacing.reg};
  margin-left: 4px;
  margin-right: ${props => props.theme.spacing.lg};
`;

const Description = styled.h3`
  margin-bottom: ${props => props.theme.spacing.sm};
  padding: ${props => props.theme.spacing.reg}
    ${props => props.theme.spacing.reg} 0;
  background-color: ${props => props.theme.color.lightGrey};
`;

const Detail = ({
  history,
  name,
  description,
  like_count,
  comment_count,
  price,
  shipping_fee,
  image
}) => {
  return (
    <Fragment>
      <StyledContainer maxWidth="reg">
        <Flex>
          <Back aria-label="Go back" onClick={() => history.goBack()}>
            ‹
          </Back>
          <Name>{name}</Name>
        </Flex>
        <Img src={image} alt={name} />
        <SmallName>{name}</SmallName>
        <Flex justify="flex-start">
          <StyledButton rounded>
            <Like />
            Like
          </StyledButton>
          <Count>{!!like_count && like_count}</Count>
          <StyledButton rounded>
            <Comment />
            Comment
          </StyledButton>
          <Count>{!!comment_count && comment_count}</Count>
        </Flex>
        <Description>Description</Description>
        <p>{description}</p>
      </StyledContainer>
      <Footer price={price} shipping_fee={shipping_fee} />
    </Fragment>
  );
};

Detail.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  description: PropTypes.string,
  like_count: PropTypes.number,
  comment_count: PropTypes.number,
  price: PropTypes.number,
  is_sold_out: PropTypes.bool,
  shipping_fee: PropTypes.string,
  image: PropTypes.string,
  category_id: PropTypes.number
};

export default Detail;
