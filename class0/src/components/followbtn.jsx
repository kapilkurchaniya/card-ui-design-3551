import { useState } from "react";

const FollowButton = () => {
  const [isFollowing, setIsFollowing] = useState(false);

  return (
    <button
      className="footer"
      onClick={() => setIsFollowing(!isFollowing)}
    >
      <p>{isFollowing ? "Following" : "Follow"}</p>
      {!isFollowing && <p id="plus">+</p>}
    </button>
  );
};

export default FollowButton;
