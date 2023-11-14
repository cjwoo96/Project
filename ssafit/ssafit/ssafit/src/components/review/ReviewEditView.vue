<template>
  <div class="container">
    <div class="shadow pt-5 pb-5 m-5 bg-light rounded" style="width: 80%;">
      <form class="reviewform" @submit.prevent="submitReview" style="width: 80%; margin: auto;">
        <input type="hidden" name="act" value="doReviewUpdate">
        <input type="hidden" name="videoId" :value="videoId">
        <input type="hidden" name="url" :value="url">
        <input type="hidden" name="reviewId" :value="review.reviewId">

        <div class="text-center">
          <span class="material-symbols-outlined">▣</span>
          <h2 class="d-inline mb-3 fs-4 fw-semibold">운동영상 리뷰 수정</h2>
          <span class="material-symbols-outlined">▣</span>
        </div>
        <hr class="mb-3">

        <div class="mb-3">
          <label for="inputTitle" class="col-form-label">제목</label>
          <input v-model="review.title" type="text" class="form-control" id="inputEmail3" name="title">
        </div>

        <div class="mb-4">
          <label for="inputContent" class="col-form-label">수정할 내용</label>
          <textarea v-model="review.content" class="form-control" type="text" name="content" rows="3"></textarea>
        </div>

        <button type="submit" class="w-20 me-2 btn btn-outline-primary">수정</button>
        <button @click="cancelUpdate" type="button" class="w-20 btn btn-outline-danger">취소</button>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref, defineProps } from 'vue';

const props = defineProps(['videoId', 'url', 'review']);
const review = ref(props.review);

const submitReview = () => {
  // Handle the form submission logic here, e.g., send a request to your server
  // using a library like Axios or fetch
  console.log('Review updated:', review.value.title, review.value.content);
  // Reset form fields if needed
  review.value.title = '';
  review.value.content = '';
};

const cancelUpdate = () => {
  // Use $router directly without 'this'
  props.$router.push({ path: './main', query: { act: 'reviewList', videoId: props.videoId, url: props.url } });
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