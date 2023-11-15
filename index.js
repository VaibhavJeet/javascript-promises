//Using promises
function createPost(post) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(post);
      }, 1000);
    });
  }
  
  function updateLastUserActivityTime(userId) {
    return new Promise((resolve) => {
      setTimeout(() => {
        const currentTime = new Date().toISOString();
        resolve(currentTime);
      }, 1000);
    });
  }
  
  function deletePost(postId) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, 1000);
    });
  }
  
  function getColdDrinks() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("Got cold drinks");
      }, 2000);
    });
  }
  
  const userId = 123;
  
  async function managePosts() {
    try {
      const newPost = await createPost("New Post");
      const lastActivityTime = await updateLastUserActivityTime(userId);
      console.log("Posts:", [newPost]);
      console.log("Last Activity Time:", lastActivityTime);

      await deletePost(0);
  
      console.log("Remaining Posts:", []);
    } catch (error) {
      console.error("Error:", error);
    }
  }
  
  async function handleHusbandTasks() {
    try {
      console.log("Husband went to get butter...")
      const coldDrinks = await getColdDrinks();
      console.log(coldDrinks);
      await managePosts();
    } catch (error) {
      console.error("Error:", error);
    }
  }
  
  handleHusbandTasks();

  
//Using async-await
function createPost(post) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(post);
      }, 1000);
    });
  }
  
  function updateLastUserActivityTime(userId) {
    return new Promise((resolve) => {
      setTimeout(() => {
        const currentTime = new Date().toISOString();
        resolve(currentTime);
      }, 1000);
    });
  }
  
  function deletePost(postId) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, 1000);
    });
  }
  
  function getColdDrinks() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("Got cold drinks");
      }, 2000);
    });
  }
  
  const userId = 123; 
  
  async function managePosts() {
    try {
      const newPost = await createPost("New Post");
      const lastActivityTime = await updateLastUserActivityTime(userId);
      console.log("Posts:", [newPost]);
      console.log("Last Activity Time:", lastActivityTime);
      await deletePost(0);
  
      console.log("Remaining Posts:", []);
    } catch (error) {
      console.error("Error:", error);
    }
  }
  
  async function handleHusbandTasks() {
    try {
      console.log("Husband went to get butter...");
      const coldDrinks = await getColdDrinks();
      console.log(coldDrinks);

      await managePosts();
    } catch (error) {
      console.error("Error:", error);
    }
  }
  
  handleHusbandTasks();
  