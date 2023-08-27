import { stripIndent } from 'common-tags';

import { parseContent } from '../gatsby/greenhouseJobBlockParser';

describe('Greenhouse content block parser', () => {
  it('should parses full content (encoded)', () => {
    const input = stripIndent`
      &lt;div class=&quot;content-intro&quot;&gt;&lt;h3&gt;당근 팀 합류 여정에 오르신 것을 진심으로 환영해요&lt;/h3&gt;
      &lt;p&gt;당근마켓은 회사의 성장에 맞춰 개인이 함께 성장할 수 있는 환경을 만들기 위해 노력을 하고 있어요.&amp;nbsp;&lt;/p&gt;
      &lt;p&gt;멋진 동료들과 행복한 고민을 하는 그 순간이 올 수 있도록 당근 채용팀이 도와드릴게요.&lt;/p&gt;
      &lt;hr&gt;
      &lt;p&gt;&amp;nbsp;&lt;/p&gt;&lt;/div&gt;&lt;h3&gt;이런 일을 해요&lt;/h3&gt;
      &lt;ul&gt;
      &lt;li&gt;매출/매입 증빙 관리 및 전표 처리 외 전반적인 회계결산 실무를 담당해요 (자회사 결산 포함)&lt;/li&gt;
      &lt;li&gt;회계결산 및 재무제표를 작성해요&lt;/li&gt;
      &lt;li&gt;지역광고 매출에 대한 세금계산서를 발행해요&lt;/li&gt;
      &lt;li&gt;입점 파트너사 대금을 정산해요&lt;/li&gt;
      &lt;li&gt;회계 감사 대응을 해요&lt;/li&gt;
      &lt;li&gt;효율적인 회계 결산 프로세스를 구축하고 아이디어 제안을 해요&lt;/li&gt;
      &lt;li&gt;문서 관리, 계약서 커머셜사항 검토 등 기타 경영지원 업무을 해요&lt;/li&gt;
      &lt;/ul&gt;
      &lt;h3&gt;이런 분을 찾고 있어요&lt;/h3&gt;
      &lt;ul&gt;
      &lt;li&gt;법인 재무제표의 작성 업무를 주도적으로 수행하신 경험이 있으신 분 (회계 결산 업무 경력 최소 5년)&lt;/li&gt;
      &lt;li&gt;MS Office 엑셀, 구글 스프레드 시트를 능숙하게 사용 가능하신 분&lt;/li&gt;
      &lt;li&gt;꼼꼼하고 숫자에 강하며, 책임감이 강하고 능동적으로 업무에 임하시는 분&lt;/li&gt;
      &lt;li&gt;커뮤니케이션 능력과 협업 능력이 뛰어나신 분&lt;/li&gt;
      &lt;/ul&gt;
      &lt;h3&gt;이런 분이면 더 좋아요!&lt;/h3&gt;
      &lt;ul&gt;
      &lt;li&gt;더존 Smart A 또는 더존 iCUBE 사용 경험이 있으신 분&lt;/li&gt;
      &lt;li&gt;연결결산 경험이 있으신 분&lt;/li&gt;
      &lt;li&gt;관리회계(부문별 손익 도출)의 경험이 있으신 분&lt;/li&gt;
      &lt;li&gt;IT 또는 스타트업 회사에서의 업무 경험 또는 이해도가 있으신 분&lt;/li&gt;
      &lt;li&gt;PG결산 경험이 있으신 분&lt;/li&gt;
      &lt;/ul&gt;
      &lt;h3&gt;참고해 주세요&lt;/h3&gt;
      &lt;ul&gt;
      &lt;li&gt;정규직&amp;nbsp;&lt;span class=&quot;c-mrkdwn__highlight&quot;&gt;채용&lt;/span&gt;의 경우 3개월의 수습기간이 있어요&lt;/li&gt;
      &lt;li&gt;평가 결과에 따라 수습 기간이 연장되거나 &lt;span class=&quot;c-mrkdwn__highlight&quot;&gt;채용&lt;/span&gt;이 취소될 수 있어요&lt;/li&gt;
      &lt;/ul&gt;
      &lt;h3&gt;이렇게 합류해요&lt;/h3&gt;
      &lt;ul&gt;
      &lt;li&gt;1. 서류 접수 →&amp;nbsp; 2. 화상 면접 →&amp;nbsp; 3. 직무 면접(퀴즈) →&amp;nbsp; 4. 컬쳐핏 면접&lt;/li&gt;
      &lt;/ul&gt;&lt;div class=&quot;content-conclusion&quot;&gt;&lt;p&gt;&amp;nbsp;&lt;/p&gt;
      &lt;hr&gt;
      &lt;h3&gt;&lt;strong&gt;당근마켓 전형 소개&lt;/strong&gt;&lt;/h3&gt;
      &lt;h4&gt;&lt;strong&gt;서류 전형&lt;/strong&gt;&lt;/h4&gt;
      &lt;p&gt;당근마켓은 자유형식의 지원서를 받고 있어요.&lt;/p&gt;
      &lt;p&gt;본인의 강점이 잘 드러나는 다양한 정보를 자유롭게 활용해 이력서를 작성해 주세요.&amp;nbsp;&lt;/p&gt;
      &lt;ul&gt;
      &lt;li&gt;문서 형식은 hwp(한글) 파일을 제외하고 word, pdf, 웹 링크 등 자유롭게 선택해주시면 돼요.&lt;/li&gt;
      &lt;li&gt;웹 링크(노션, 구글드라이브 등)로 서류를 제출해주실 때는 접근 권한을 꼭 열어주세요.&lt;/li&gt;
      &lt;li&gt;평가와 상관 없는 사진, 주소 등의 개인정보는 제외해주세요.&lt;/li&gt;
      &lt;/ul&gt;
      &lt;h4&gt;화상 면접&lt;/h4&gt;
      &lt;p&gt;지원해주신 직무와 업무 연관성이 높은 당근 팀원과 화상으로 직무와 관련된 기본적인 지식에 대해 이야기를 나누는 단계예요.&lt;/p&gt;
      &lt;p&gt;&lt;strong&gt;과제 전형&lt;/strong&gt;&lt;/p&gt;
      &lt;p&gt;직무에 따라 과제 전형이 있어요. 과제는 직무 능력과 연관된 내용으로 출제돼요. 과제 전형을 별도로 운영하는 직무도 있고, 화상 면접 또는 직무 면접에서 과제가 함께 출제되는 경우도 있어요.&lt;/p&gt;
      &lt;h4&gt;직무 면접&lt;/h4&gt;
      &lt;p&gt;지원하신 직무와 업무 연관성이 높은 당근 팀원들과 직무 역량, 경험에 대해 화상 면접보다 심층적인 이야기를 나누는 단계예요.&lt;br&gt;과제가 출제되었을 경우 과제에 대한 질문을 드려요.&lt;/p&gt;
      &lt;h4&gt;컬쳐핏 면접(정규직 공통)&lt;/h4&gt;
      &lt;p&gt;당근마켓은 면접을 단순히 회사에 사람을 뽑는 자리로 생각하지 않아요. 당근마켓과 지원자가 서로 추구하는 가치관과 생각을 교환하는 시간이라고 생각하고 있어요. 컬쳐핏 단계는 당근이 추구하는 문화와 일하는 방식과 잘 어울릴 수 있는 분인지 확인하는 단계예요. 또한 포지션에 대한 전문성을 다시금 확인하는 이야기를 나눠요.&lt;/p&gt;
      &lt;h4&gt;안내사항&lt;/h4&gt;
      &lt;ul&gt;
      &lt;li&gt;본 공고는 모집 완료 시 조기 마감될 수 있어요.&lt;/li&gt;
      &lt;li&gt;전형 절차는 일정 및 상황에 따라 변동될 수 있다는 점 참고해 주세요.&lt;/li&gt;
      &lt;li&gt;지원서 내용 중 허위사실이 있는 경우 합격이 취소될 수 있어요.&lt;/li&gt;
      &lt;li&gt;보훈대상자 및 장애인 여부는 채용 과정에서 불이익이 없어요.&lt;/li&gt;
      &lt;li&gt;경력 기간에 따라 추가 역량 검증을 위해 최대 3개월 계약직으로 근무할 수 있어요.&lt;/li&gt;
      &lt;li&gt;정규직 채용의 경우 입사 후 3개월의 수습 기간이 있어요. &lt;br&gt;평가 결과에 따라 수습 기간이 연장되거나 채용이 취소될 수 있어요.&lt;/li&gt;
      &lt;/ul&gt;
      &lt;p&gt;&amp;nbsp;&lt;/p&gt;
      &lt;p&gt;당근 채용에 대해 궁금한 점이 있으면 언제든지 편하게 문의 주세요 :)&lt;/p&gt;
      &lt;p&gt;&lt;strong&gt;문의 채널 : &lt;/strong&gt;&lt;strong&gt;카카오톡 채널&lt;/strong&gt; : &lt;a href=&quot;http://pf.kakao.com/_rSJFK/chat&quot; target=&quot;_blank&quot;&gt;http://pf.kakao.com/_rSJFK/chat&lt;/a&gt;&lt;/p&gt;
      &lt;p&gt;&amp;nbsp;&lt;/p&gt;&lt;/div&gt;
    `;

    expect(parseContent(input).content).toEqual([
      {
        level: 'H3',
        title: '이런 일을 해요',
        bodyHtml: stripIndent`
          <ul>
          <li>매출/매입 증빙 관리 및 전표 처리 외 전반적인 회계결산 실무를 담당해요 (자회사 결산 포함)</li>
          <li>회계결산 및 재무제표를 작성해요</li>
          <li>지역광고 매출에 대한 세금계산서를 발행해요</li>
          <li>입점 파트너사 대금을 정산해요</li>
          <li>회계 감사 대응을 해요</li>
          <li>효율적인 회계 결산 프로세스를 구축하고 아이디어 제안을 해요</li>
          <li>문서 관리, 계약서 커머셜사항 검토 등 기타 경영지원 업무을 해요</li>
          </ul>
        `,
      },
      {
        level: 'H3',
        title: '이런 분을 찾고 있어요',
        bodyHtml: stripIndent`
          <ul>
          <li>법인 재무제표의 작성 업무를 주도적으로 수행하신 경험이 있으신 분 (회계 결산 업무 경력 최소 5년)</li>
          <li>MS Office 엑셀, 구글 스프레드 시트를 능숙하게 사용 가능하신 분</li>
          <li>꼼꼼하고 숫자에 강하며, 책임감이 강하고 능동적으로 업무에 임하시는 분</li>
          <li>커뮤니케이션 능력과 협업 능력이 뛰어나신 분</li>
          </ul>
        `,
      },
      {
        level: 'H3',
        title: '이런 분이면 더 좋아요!',
        bodyHtml: stripIndent`
          <ul>
          <li>더존 Smart A 또는 더존 iCUBE 사용 경험이 있으신 분</li>
          <li>연결결산 경험이 있으신 분</li>
          <li>관리회계(부문별 손익 도출)의 경험이 있으신 분</li>
          <li>IT 또는 스타트업 회사에서의 업무 경험 또는 이해도가 있으신 분</li>
          <li>PG결산 경험이 있으신 분</li>
          </ul>
        `,
      },
      {
        level: 'H3',
        title: '참고해 주세요',
        bodyHtml: stripIndent`
          <ul>
          <li>정규직&nbsp;<span class="c-mrkdwn__highlight">채용</span>의 경우 3개월의 수습기간이 있어요</li>
          <li>평가 결과에 따라 수습 기간이 연장되거나 <span class="c-mrkdwn__highlight">채용</span>이 취소될 수 있어요</li>
          </ul>
        `,
      },
      {
        level: 'H3',
        title: '이렇게 합류해요',
        bodyHtml: stripIndent`
          <ul>
          <li>1. 서류 접수 →&nbsp; 2. 화상 면접 →&nbsp; 3. 직무 면접(퀴즈) →&nbsp; 4. 컬쳐핏 면접</li>
          </ul>
        `,
      },
    ]);
  });

  it('parses HTML paragraph block', () => {
    const input = stripIndent`
      <h3>제목</h3>
      <p>내용</p>
    `;
    expect(parseContent(input)).toEqual({
      content: [
        {
          level: 'H3',
          title: '제목',
          bodyHtml: stripIndent`
            <p>내용</p>
          `,
        },
      ],
      raw: stripIndent`
        <h3>제목</h3>
        <p>내용</p>
      `,
    });
  });

  it('parses HTML multiple paragraph block', () => {
    const input = stripIndent`
      <h3>제목</h3>
      <p>내용1</p>
      <p>내용2</p>
      <p>내용3</p>
    `;
    expect(parseContent(input)).toEqual({
      content: [
        {
          level: 'H3',
          title: '제목',
          bodyHtml: stripIndent`
            <p>내용1</p>
            <p>내용2</p>
            <p>내용3</p>
          `,
        },
      ],
      raw: stripIndent`
        <h3>제목</h3>
        <p>내용1</p>
        <p>내용2</p>
        <p>내용3</p>
      `,
    });
  });

  it('parses HTML unordered list block', () => {
    const input = stripIndent`
      <h3>제목</h3>
      <ul>
        <li>내용 1</li>
        <li>내용 2</li>
        <li>내용 3</li>
      </ul>
    `;
    expect(parseContent(input)).toEqual({
      content: [
        {
          level: 'H3',
          title: '제목',
          bodyHtml: stripIndent`
            <ul>
              <li>내용 1</li>
              <li>내용 2</li>
              <li>내용 3</li>
            </ul>
          `,
        },
      ],
      raw: stripIndent`
        <h3>제목</h3>
        <ul>
          <li>내용 1</li>
          <li>내용 2</li>
          <li>내용 3</li>
        </ul>
      `,
    });
  });

  it('parses HTML ordered list block', () => {
    const input = stripIndent`
      <h3>제목</h3>
      <ol>
        <li>내용 1</li>
        <li>내용 2</li>
        <li>내용 3</li>
      </ol>
    `;
    expect(parseContent(input)).toEqual({
      content: [
        {
          level: 'H3',
          title: '제목',
          bodyHtml: stripIndent`
            <ol>
              <li>내용 1</li>
              <li>내용 2</li>
              <li>내용 3</li>
            </ol>
          `,
        },
      ],
      raw: stripIndent`
        <h3>제목</h3>
        <ol>
          <li>내용 1</li>
          <li>내용 2</li>
          <li>내용 3</li>
        </ol>
      `,
    });
  });

  it('should strips all tags on title', () => {
    const input = stripIndent`
      <h3><string>제목<br><br/></string></h3>
      <p>내용</p>
    `;
    expect(parseContent(input)).toEqual({
      content: [
        {
          level: 'H3',
          title: '제목',
          bodyHtml: '<p>내용</p>',
        },
      ],
      raw: stripIndent`
        <h3><string>제목<br><br/></string></h3>
        <p>내용</p>
      `,
    });
  });
});
