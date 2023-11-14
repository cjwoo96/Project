import { ref } from "vue";
import { defineStore } from "pinia";
import router from "@/router";
import axios from "axios";

const REST_REVIEW_API = `http://localhost:8080/api-review`;

export const useReviewStore = defineStore("review", () => {
  // 동영상 별 리뷰 전체 목록
  const reviewList = ref([]);
  const getReviewList = function (videoId) {
    axios
      .get(`${REST_REVIEW_API}/reviews/${videoId}`)
      .then((response) => {
        reviewList.value = response.data;
      })
      .catch((e) => {
        console.error(e);
      });
  };

  //리뷰 상세보기
  const review = ref({});
  const getReviewById = function (reviewId) {
    axios
      .get(`${REST_REVIEW_API}/review/${reviewId}`)
      .then((response) => {
        console.log("이거 뜨나? ", review.value);
        review.value = response.data;
      })
      .catch((e) => {
        console.error(e);
      });
  };

  //리뷰 등록
  const createReview = function (review) {
    axios({
      url: REST_REVIEW_API,
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      data: review,
    })
      .then(() => {
        router.push({ name: "reviewList" });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // 리뷰 업데이트
  const updateReview = function (review) {
    axios.put(REST_REVIEW_API, review.value).then(() => {
      router.push({ name: "reviewList" });
    });
  };

  const deleteReview = function (reviewId) {
    axios.delete(`${REST_REVIEW_API}/${reviewId}`).catch((err) => {
      console.log(err);
    });
  };

  return {
    reviewList,
    getReviewList,
    review,
    getReviewById,
    createReview,
    updateReview,
    deleteReview,
  };
});
