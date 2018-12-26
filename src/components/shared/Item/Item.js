import React, { PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import SquareImg from '../SquareImg';
import Like from '../../../svg/like.svg';

const Article = styled.article`
  position: relative;
  background-color: ${props => props.theme.color.white};
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

const Sold = styled.span`
  position: absolute;
  top: -50px;
  left: -50px;
  z-index: 2;
  width: 100px;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  background-color: ${props => props.theme.color.primary};
  color: ${props => props.theme.color.white};
  line-height: 1.5;
  font-size: ${props => props.theme.font.p};
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 2px;
  transform: rotate(-45deg);
`;

const Info = styled.div`
  padding: ${props => props.theme.spacing.sm};
  display: flex;
  flex-direction: column;
  flex: 1;
  word-break: break-all;
  &,
  & h2 {
    font-size: ${props => props.theme.font.p};
    color: ${props => props.theme.color.grey};
  }
  & h2 {
    line-height: 1.5;
  }
`;

const Flex = styled.div`
  margin-top: auto;
  display: flex;
  flex-wrap: wrap;
`;

const Likes = styled.span`
  margin-left: auto;
  padding-left: ${props => props.theme.spacing.sm};
  display: flex;
  align-items: center;

  & svg {
    margin-right: 4px;
  }
`;

class Item extends PureComponent {
  render() {
    const { name, price, image, like_count, is_sold_out, ...rest } = this.props;
    return (
      <Article {...rest}>
        {is_sold_out && <Sold>Sold</Sold>}
        <SquareImg src={image} alt={name} />
        <Info>
          <h2>{name}</h2>
          <Flex>
            <strong>¥{price.toLocaleString('ja-JP')}</strong>
            <Likes>
              {!!like_count && (
                <Fragment>
                  <Like />
                  <span>{like_count}</span>
                </Fragment>
              )}
            </Likes>
          </Flex>
        </Info>
      </Article>
    );
  }
}

Item.propTypes = {
  name: PropTypes.string,
  price: PropTypes.number,
  image: PropTypes.string,
  like_count: PropTypes.number,
  is_sold_out: PropTypes.bool
};

export default Item;
