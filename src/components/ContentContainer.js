import TopNavigation from "./TopNavigation";
import { BsPlusCircleFill } from "react-icons/bs";
import { BiSad } from "react-icons/bi";
import { useState } from "react";
import DefaultImage from "../img/blank.png";

const ContentContainer = ({ posts, onAdd }) => {
  const [comment, setComment] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    if (!comment) {
      alert("Please enter a message.");
      return;
    }

    onAdd({ comment });
    setComment("");
  };

  return (
    <div className="content-container">
      <TopNavigation />
      <div className="content-list mt-10">
        {posts.length > 0 ? (
          posts.map((post) => (
            <Post
              key={post.id}
              name={post.name}
              timestamp={post.timestamp}
              text={post.comment}
            />
          ))
        ) : (
          <NoPostFound />
        )}
      </div>

      <div className="bottom-bar">
        <form className="bottom-bar" onSubmit={onSubmit}>
          <PlusIcon />
          <input
            type="text"
            placeholder="Enter message..."
            className="bottom-bar-input"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />
        </form>
      </div>
    </div>
  );
};

const Post = ({ name, timestamp, text }) => {
  // Generate random images for avatar placeholder
  const random = Math.floor(Math.random() * 60) + 1;
  const avatarURL = `https://i.pravatar.cc/150?img=${random}`;

  // Check for image errror
  const onImageError = (e) => {
    return e.target.src = DefaultImage;
  }

  return (
    <div className={"post"}>
      <div className="avatar-wrapper">
        <img
          onError={onImageError}
          src={`${avatarURL}`}
          alt={name}
          className="avatar"
        />
      </div>

      <div className="post-content">
        <p className="post-owner">
          {name}
          <small className="timestamp">{formatDate(timestamp)}</small>
        </p>
        <p className="post-text">{text}</p>
      </div>
    </div>
  );
};

const NoPostFound = () => {
  return (
    <div className="dark:text-white mt-20">
      <BiSad
        size="60"
        className="ml-32 justify-content-center mb-5 text-green-500 dark:shadow-lg dark:text-primary"
      />
      <p className="text-center text-2xl">No messages available</p>
      <p className="text-center text-2xl">Enter a new message below.</p>
    </div>
  );
};

const PlusIcon = () => (
  <BsPlusCircleFill
    size="22"
    className="text-green-500 dark:shadow-lg mx-2 dark:text-primary"
  />
);

function formatDate(milliseconds) {
  // TIP: to find current time in milliseconds, use:
  // var current_time_milliseconds = new Date(milliseconds).getTime();

  const DateString = new Date(milliseconds);
  return DateString.toDateString();

  // function numberEnding (number) {
  //     return (number > 1) ? 's' : '';
  // }

  // // var temp = Math.floor(milliseconds / 1000);
  // var temp = Math.floor(current_time_milliseconds / 1000);
  // var years = Math.floor(temp / 31536000);
  // if (years) {
  //     return years + ' year' + numberEnding(years);
  // }
  // //TODO: Months! Maybe weeks?
  // var days = Math.floor((temp %= 31536000) / 86400);
  // if (days) {
  //     return days + ' day' + numberEnding(days);
  // }
  // var hours = Math.floor((temp %= 86400) / 3600);
  // if (hours) {
  //     return hours + ' hour' + numberEnding(hours);
  // }
  // var minutes = Math.floor((temp %= 3600) / 60);
  // if (minutes) {
  //     return minutes + ' minute' + numberEnding(minutes);
  // }
  // var seconds = temp % 60;
  // if (seconds) {
  //     return seconds + ' second' + numberEnding(seconds);
  // }
  // return 'less than a second'; //'just now' //or other string you like;
}

export default ContentContainer;
