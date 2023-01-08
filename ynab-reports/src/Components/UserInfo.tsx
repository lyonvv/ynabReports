interface IProps {
  userId?: string;
}

export const UserInfo = ({ userId }: IProps) => {
  return <div>{`UserId: ${userId}`}</div>;
};
