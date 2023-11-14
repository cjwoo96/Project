<template>
  <header>
    <nav class="navbar shadow navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
        <a class="navbar-brand" id="page-name" href="./main?act=main">SSAFIT</a>
        <div class="justify-end d-flex" id="navbarScroll">
          <ul
            class="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll"
            style="-bs-scroll-height: 100px"
          >
            <li class="nav-item">
              <a
                class="nav-link active"
                aria-current="page"
                href="./main?act=main"
                >HOME</a
              >
            </li>

            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                사용자
              </a>
              <ul class="dropdown-menu">
                <li>
                  <a class="dropdown-item" href="/user/likeList.html">찜</a>
                </li>
                <li>
                  <a class="dropdown-item" href="/user/follow.html">팔로우</a>
                </li>
              </ul>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/user/login.html">로그아웃</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <div class="main-image-container">
      <img
        class="main-image object-fit-cover"
        src="https://watermark.lovepik.com/photo/20211126/large/lovepik-gym-picture_501088658.jpg"
        alt="main image"
      />
    </div>
  </header>
</template>

<script setup></script>

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
