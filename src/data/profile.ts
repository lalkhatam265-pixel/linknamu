export type LinkItem = {
  /** 클릭 수 집계에 쓰는 고유 ID (영문 소문자, 숫자, 하이픈) */
  id: string;
  title: string;
  url: string;
};

export type Profile = {
  name: string;
  bio: string;
  avatar: string;
  links: LinkItem[];
};

// TODO(내용 채우기): 아래는 보여 주기용 더미 값입니다. 실제 이름, 소개, 사진, 링크로 바꾸세요.
// 사진은 public/ 폴더에 넣고 "/파일명" 형태로 지정합니다.
export const profile: Profile = {
  name: "김개발",
  bio: "풀스택 개발자 | 요즘에는 AI 개발에 관심이 많아요.",
  avatar: "/istockphoto-2155252547-612x612.jpg",
  links: [
    { id: "github", title: "GitHub", url: "https://github.com" },
    { id: "linkedin", title: "LinkedIn", url: "https://www.linkedin.com" },
    { id: "blog", title: "Blog", url: "https://example.com" },
  ],
};
