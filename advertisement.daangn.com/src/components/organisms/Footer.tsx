import React from "react";

import { styled } from "~/gatsby-theme-stitches/stitches.config";
import { rem } from "polished";
import { FooterIconButton } from "~/components/molecules/FooterIconButton";

export const Footer = () => {
  const footerData = {
    tel: "전화 : 1644-9736",
    cs: "고객문의 : ad@daangn.com",
    cooperate: "제휴문의 : contact@daangn.com",
    head: "대표: 김재현, 김용현",
    businessLicenseNo: "사업자 등록번호 : 375-87-00088",
    digitalLicenseNo: "통신판매업 신고번호 : 2016-서울서초-0051",
    serviceAddress: "서울특별시 구로구 디지털로 30길 28 609호 (당근서비스)",
  };

  return (
    <Base>
      <FooterDesktop>
        <div>
          <FooterContent agreement>이용약관</FooterContent>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "flex-end",
          }}
        >
          <div style={{ marginRight: rem(32) }}>
            <FooterIconButton
              target="youtube"
              link="https://www.youtube.com/channel/UCn9ThfjAEQkvzkHISAek3dg/featured"
            />
          </div>
          <FooterIconButton
            target="blog"
            link="https://blog.naver.com/daangn_biz"
          />
        </div>
        <div>
          <FooterContent copyright>© 당근마켓</FooterContent>
          <ContactRow>
            <p>{footerData.tel}</p>
            <p>{footerData.cs}</p>
            <p>{footerData.cooperate}</p>
          </ContactRow>
          <ContactRow>
            <p>{footerData.head}</p>
            <p>{footerData.businessLicenseNo}</p>
            <p>{footerData.digitalLicenseNo}</p>
          </ContactRow>
          <ContactRow>
            <p>{footerData.serviceAddress}</p>
          </ContactRow>
        </div>
      </FooterDesktop>
      <FooterMobile>
        <FooterContent agreement>이용약관</FooterContent>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "flex-start",
            margin: `${rem(32)} 0`,
          }}
        >
          <div style={{ paddingRight: rem(24) }}>
            <FooterIconButton
              target="youtube"
              link="https://www.youtube.com/channel/UCn9ThfjAEQkvzkHISAek3dg/featured"
            />
          </div>
          <FooterIconButton
            target="blog"
            link="https://blog.naver.com/daangn_biz"
          />
        </div>
        <FooterContent copyright>© 당근마켓</FooterContent>
        <ContactRow>
          <p>{footerData.tel}</p>
          <p>{footerData.cs}</p>
        </ContactRow>
        <ContactRow>
          <p>{footerData.head}</p>
          <p>{footerData.businessLicenseNo}</p>
        </ContactRow>
        <ContactRow>
          <p>{footerData.digitalLicenseNo}</p>
        </ContactRow>
        <ContactRow>
          <p>{footerData.serviceAddress}</p>
        </ContactRow>
      </FooterMobile>
    </Base>
  );
};

const Base = styled("div", {
  borderTop: "1px solid #DCDEE3",
  paddingX: rem(24),
  paddingTop: rem(33),
  paddingBottom: rem(76),
  "@md": {
    display: "flex",
    paddingY: rem(71),
    alignItems: "center",
    justifyContent: "center",
  },
});

const FooterDesktop = styled("div", {
  display: "none",
  "@md": {
    display: "grid",
    width: "80%",
    gap: rem(36),
    gridTemplateRows: "auto auto",
    gridTemplateColumns: "auto auto",
  },
  "& > :nth-child(3)": {
    gridColumnStart: 1,
    gridColumnEnd: "span 2",
  },
});

const FooterMobile = styled("div", {
  display: "grid",

  "@md": {
    display: "none",
  },
});

const FooterContent = styled("p", {
  variants: {
    agreement: {
      true: {
        fontSize: "$caption1",
        color: "$gray900",
      },
    },
    copyright: {
      true: {
        color: "$gray600",
        fontSize: "$caption1",
        fontWeight: "bold",
        marginBottom: rem(10),
      },
    },
  },
});

const ContactRow = styled("div", {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  marginBottom: rem(2),

  p: {
    fontSize: "$caption2",
    color: "$gray600",
    marginRight: rem(10),
  },
});
