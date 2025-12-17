# happybirth

이 프로젝트는 `index.html`을 시작 페이지로 하는 정적 사이트입니다.

## GitHub Pages 배포 (GitHub Actions)

이 저장소에 `.github/workflows/pages.yml`가 포함되어 있어, `main` 브랜치에 push되면 GitHub Pages로 자동 배포됩니다.

### 1) 저장소 설정에서 Pages 활성화

- `Settings` → `Pages`
- `Build and deployment` → `Source`: **GitHub Actions** 선택

### 2) 배포 확인

- `main` 브랜치에 push하면 `Actions`에서 `Deploy to GitHub Pages` 워크플로우가 실행됩니다.
- 완료되면 Pages URL이 생성됩니다. (워크플로우 실행 결과의 `page_url` 참고)

README.md
