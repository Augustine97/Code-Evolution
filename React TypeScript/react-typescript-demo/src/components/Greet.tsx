type GreetProps = {
  name: string;
  messageCount?: number;
  isLoggedIn: boolean;
};

export const Greet = (props: GreetProps) => {
  const { messageCount = 0 } = props;

  return (
    <div>
      <h3>
        {props.isLoggedIn
          ? `Welcome ${props.name}! You have ${messageCount} unread messages.`
          : `Welcome Guest`}
      </h3>
    </div>
  );
};
