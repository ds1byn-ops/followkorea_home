// 빌드 시 사전 렌더링용 진입점 — AI·검색 크롤러가 자바스크립트 없이도 본문을 읽도록 HTML을 미리 만든다.
import React from 'react';
import { renderToString } from 'react-dom/server';
import App from './App';

export function render(): string {
  return renderToString(<App />);
}
