export default () => {
    console.log("inside function")

    onmessage=(e)=> {
        console.log("WEB WORKER Running...")
        console.log(e);
        if (!e) return;
    
        const users = [];
        const userDetails = {
          name: "Nikhil Hegde",
          email: "nikhil.hegde@ymedialabs.com",
          id: 1
        };
    
        for (let i = 0; i < 200000; i++) {
          userDetails.id = i++;
          userDetails.dateJoined = Date.now();
    
          users.push(userDetails);
        }
    
        postMessage(users);
      }
  };