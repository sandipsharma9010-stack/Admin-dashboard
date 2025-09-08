    fetch('/api/users')
      .then(response => response.json()) // First .then(): parse the response as JSON
      .then(userData => fetch(`/api/user/${userData.id}/details`)) // Second .then(): use user ID to fetch details
      .then(detailsResponse => detailsResponse.json()) // Third .then(): parse details response
      .then(userDetails => {
        // Use userDetails in your React component
        console.log(userDetails);
      })
      .catch(error => {
        console.error('Error in promise chain:', error);
      });