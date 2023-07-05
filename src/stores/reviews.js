import { ref, computed, reactive } from 'vue';
import { defineStore } from 'pinia';

export const useReviewsStore = defineStore('reviews', () => {
  const reviews = ref([]);
  const editedData = reactive({ editable: false, item: null });

  const addReview = async (review) => {
    const response = await fetch(`http://localhost:3000/posts/`, {
      method: 'POST',
      headers: {
        'CONTENT-TYPE': 'application/json',
      },
      body: JSON.stringify(review),
    });

    const newReview = await response.json();
    console.log(newReview);
    reviews.value = [newReview, ...reviews.value];
  };

  // Fetching reviews

  // const fetchReviews = async () => {
  //   try{
  //     const reviews = await fetch (`http://localhost:3000/posts?_sort=id&_order=desc` );
  //     const data = await reviews.json();
  //     reviews.value= data;
  //     console.log(data);
  //   }

  //   catch (error) {
  //     console.log(error);

  //   }
  // }


const  fetchReviews = async () => {
  try {
    const response = await fetch (`http://localhost:3000/posts?_sort=id&_order=desc`);
    const data = await response.json();
    reviews.value = data
    console.log(data);
  }
  catch (error) {
    console.log(error);
  }
};







  const getAverageRating = () => {
    let temp = reviews.value.reduce((acc, cur) => {
      return acc + cur.rating;
    }, 0) / reviews.value.length;

    temp = temp.toFixed(1).replace(/[.,]0&/, '');

    return temp;
  };

  // function reviewsCount () {
  //   return reviews.length
  // }; 

const getReviewsCount = () => {
  return reviews.length
} 

const getReviewsContent = () => {
  return reviews.value
}

  return { reviews, editedData, addReview, getAverageRating,getReviewsCount, fetchReviews, getReviewsContent };
});
