<template>
  <div class="container">
    <div class="shadow pt-5 pb-5 m-5 bg-light rounded" style="width: 80%">
      <form class="reviewform" style="width: 80%; margin: auto">
        <div class="text-center">
          <span class="material-symbols-outlined">▣</span>
          <h2 class="d-inline mb-3 fs-4 fw-semibold">운동영상 리뷰 상세</h2>
          <span class="material-symbols-outlined">▣</span>
        </div>

        <hr class="mb-3" />

        <div class="d-flex justify-content-between">
          <button
            @click="goToReviewList"
            class="w-20 me-2 btn btn-outline-primary"
          >
            목록
          </button>
          <div class="d-flex">
            <button
              @click="goToReviewUpdate"
              class="float-end w-20 me-2 btn btn-outline-primary"
            >
              글 수정
            </button>
            <button
              @click="deleteReview"
              class="float-end w-20 btn btn-outline-danger"
            >
              글 삭제
            </button>
          </div>
        </div>

        <div class="shadow-sm mb-3 text-center border p-4 mt-3">
          <div class="p-2">
            <h3 class="fs-5 fw-medium">{{ review.content }}</h3>
            <div>작성자: {{ review.writer }}</div>
            <div>작성일: {{ review.regDate }}</div>
            <div>조회수: {{ review.viewCnt }}</div>
          </div>
          <hr />
          <div class="p-2">
            <div>{{ review.content }}</div>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useReviewStore } from "../../stores/review";
import { useRouter } from "vue-router";

const store = useReviewStore();
const router = useRouter();
const currentUrl = router.currentRoute.value.fullPath.split("/");
const reviewId = currentUrl[2];
console.log(reviewId);
const review = ref({});

onMounted(() => {
  review.value = store.getReviewById(reviewId);
  console.log("뷰", store.review.value);
});

// const review = ref({
//   content: '', // Set default values or get from the data source
//   writer: '',
//   regDate: '',
//   viewCnt: '',
// });

const goToReviewList = () => {
  this.$router.push({
    path: "./main",
    query: { act: "reviewList", videoId: videoId, url: url },
  });
};

const goToReviewUpdate = () => {
  this.$router.push({
    path: "./main",
    query: {
      act: "goReviewUpdate",
      videoId: videoId,
      url: url,
      reviewId: review.reviewId,
    },
  });
};

const deleteReview = () => {
  this.$router.push({
    path: "./main",
    query: {
      act: "reviewDelete",
      videoId: videoId,
      url: url,
      reviewId: review.reviewId,
    },
  });
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

.container-fluid {
  padding: 0 20px 0 20px !important;
}

#page-name {
  font-weight: bold;
  font-size: 2rem;
}

.main-image {
  width: 100%;
  height: 200px;
}

.search-box {
  width: 100%;
  padding: 10px;
}

input {
  width: 100%;
}

.video-list img {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.video-box {
  width: 100%;
}
</style>
