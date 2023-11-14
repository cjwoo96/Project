<template>
  <main>
    <body>
      <div class="container">
        <div class="shadow pt-5 pb-5 m-5 bg-light rounded" style="width: 80%">
          <form class="reviewform" style="width: 80%; margin: auto">
            <div class="text-center">
              <span class="material-symbols-outlined">▣</span>
              <h2 class="d-inline mb-3 fs-4 fw-semibold">운동영상 리뷰 목록</h2>
              <span class="material-symbols-outlined">▣</span>
            </div>
            <hr class="mb-3" />
            <div class="text-center">
              <iframe
                width="560"
                height="315"
                :src="'https://www.youtube.com/embed/' + store.video.url"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
            </div>

            <hr class="mb-3" />

            <div class="d-flex justify-content-between">
              <button
                type="button"
                onclick="location.href='./main?act=goReviewCreate&videoId=${videoId}&url=${url}'"
                class="w-20 me-2 btn btn-outline-primary"
              >
                글 작성
              </button>
              <div
                style="border-bottom: solid gray 1px"
                class="d-flex align-items-center"
              >
                <span class="material-symbols-outlined align-items-center"
                  >search</span
                >

                <input
                  style="border: none; background-color: transparent"
                  placeholder="제목,내용으로 검색"
                />
              </div>
            </div>

            <hr class="mb-3" />

            <div class="d-flex justify-content-center">
              <table style="width: 95%">
                <tr>
                  <th class="border-bottom p-3">번호</th>
                  <th class="border-bottom p-3">제목</th>
                  <th class="border-bottom p-3">작성자</th>
                  <th class="border-bottom p-3">조회수</th>
                  <th class="border-bottom p-3">작성시간</th>
                </tr>

                <tr
                  v-for="review in reviewStore.reviewList"
                  :key="reviewId"
                  style="cursor: pointer; text-decoration: underline"
                  class="link-dark link-offset-2 link-underline-opacity-0 link-underline-opacity-100-hover"
                >
                  <td class="p-3">{{ review.reviewId }}</td>
                  <td @click="($event) => gotoReviewDetail(review)" class="p-3">
                    {{ review.title }}
                  </td>
                  <td class="p-3">{{ review.writer }}</td>
                  <td class="p-3">{{ review.viewCnt }}</td>
                  <td class="p-3">{{ review.regDate }}</td>
                </tr>
              </table>
            </div>
          </form>
        </div>
      </div>
    </body>
  </main>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { useRouter } from "vue-router";
import { useVideoStore } from "@/stores/video.js";
import { useReviewStore } from "@/stores/review.js";

const reviewStore = useReviewStore();
const store = useVideoStore();
const router = useRouter();
const currentUrl = router.currentRoute.value.fullPath.split("/");
const videoId = currentUrl[2];
console.log(videoId);
const reviewList = ref([]);

onMounted(() => {
  store.selectVideoById(videoId);
  reviewList.value = reviewStore.getReviewList(videoId);
});

const gotoReviewDetail = (review) => {
  const reviewId = review.reviewId;
  console.log("눌렀음", reviewId);
  router.push({ name: "ReviewDetailView", params: { id: reviewId } });
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  list-style: none;
}

a {
  text-decoration: none !important;
}

.container {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  left: 0;
  right: 0;
  margin: auto;
  margin-top: 100px;
  margin-bottom: 200px;
  width: 1400px;
}

input {
  width: 100%;
}
</style>
