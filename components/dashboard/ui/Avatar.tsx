const Avatar = ({isAvatar}:{isAvatar: boolean}) => {
  return (
    <div className={`  ${!isAvatar? "w-8 h-8" : "w-10 h-10 md:w-18 md:h-18"}`}>
      <img
        src="/default-avartar.jpg"
        alt="user avatar"
        className="h-full w-full rounded-full max-w-full "
      />
    </div>
  );
};

export default Avatar;
