const ProfileIcon = (props) => {
  return (
    <div className="h-10 rounded-md min-w-fit bg-zinc-800 mr-4 mt-2 border-2 border-pink-500 p-5 flex items-center">
      {props.children}
      <p className="lg:ml-1">{props.title}</p>
    </div>
  );
};

export default ProfileIcon;
