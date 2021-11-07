import { FC } from "react";
import { styled } from "gatsby-theme-stitches/src/config";
import { rem, em } from "polished";

const termsBaseUrl =
  "https://cdn.prod.kr.karrotpay.com/karrotpay-terms/terms/money";

const Footer: FC = () => {
  return (
    <Wrapper>
      <List>
        <Item>사업자등록번호 : 809-87-02070 | 대표 : 김재현</Item>
        <Item>주소 : 서울특별시 서초구 강남대로 465, 교보강남타워 10층</Item>
        <Item>통신판매업 신고번호 : 2021-서울서초-3607</Item>
        <Item>문의 : contact@daangnpay.com</Item>
        <Item>호스팅 서비스 : (주)당근페이</Item>

        <TermsBox>
          <TermsLink
            href={`${termsBaseUrl}/1_20211018.html`}
            target="_blank"
            rel="noopener noreferrer"
          >
            서비스 약관
          </TermsLink>
          <TermsLink
            href={`${termsBaseUrl}/2_20211018.html`}
            target="_blank"
            rel="noopener noreferrer"
          >
            전자금융거래 이용약관
          </TermsLink>
          <TermsLink
            href={`${termsBaseUrl}/3_20211018.html`}
            target="_blank"
            rel="noopener noreferrer"
          >
            개인정보처리방침
          </TermsLink>
          <TermsLink
            href={`${termsBaseUrl}/trust_disclosure.html`}
            target="_blank"
            rel="noopener noreferrer"
          >
            선불충전금 신탁 관련 안내
          </TermsLink>
        </TermsBox>
      </List>
    </Wrapper>
  );
};

const Wrapper = styled("footer", {
  display: "flex",
  alignItems: "center",
  height: "300px",
  padding: `0 ${em(90)}`,
  boxSizing: "border-box",
  backgroundColor: "#F8F9FA",
});

const List = styled("ul", {
  width: "100%",
  maxWidth: "1440px",
  margin: "0 auto",
  listStyle: "none",
});

const Item = styled("li", {
  lineHeight: rem(28),
  fontSize: rem(14),
});

const TermsBox = styled("div", {
  display: "flex",
  marginTop: "20px",
});

const TermsLink = styled("a", {
  color: "black",
  fontSize: "14px",

  "&:visited, &:focus, &:active": {
    color: "black",
  },

  "&:not(&:first-of-type)": {
    marginLeft: "30px",
  },
});

export default Footer;
