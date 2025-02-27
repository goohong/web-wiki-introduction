document.addEventListener("DOMContentLoaded", () => {
    const commentForm = document.querySelector("form");
    const commentInput = document.querySelector("textarea");
    const commentList = document.querySelector(".comment-list");

    commentForm.addEventListener("submit", (event) => {
        event.preventDefault(); // 기본 폼 제출 이벤트 방지
        const commentText = commentInput.value.trim();

        if (commentText === "") {
            alert("댓글을 입력해주세요!");
            return;
        }

        // 새로운 댓글 요소 생성
        const commentItem = document.createElement("li");
        commentItem.innerHTML = `
            <div class="comment-item">
                <div class="comment-author">
                    <img src="./images/profile.png" alt="사용자 프로필 이미지" />
                    <span>방문자</span>
                </div>
                <div class="comment-content">${commentText}</div>
            </div>
        `;

        // 목록에 추가
        commentList.appendChild(commentItem);

        // 성공 메시지
        alert("댓글이 등록되었습니다!");

        // 입력창 초기화
        commentInput.value = "";
    });
});
