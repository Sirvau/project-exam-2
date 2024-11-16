import { useUserStore } from '../../../../stores/user-store';

export function Avatar() {
  const { userData } = useUserStore();
  const avatarUrl =
    userData?.data?.avatar?.url ||
    'https://images.unsplash.com/photo-1511367461989-f85a21fda167?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';

  return (
    <div className="avatar">
      <div className="w-10 xl:w-12 rounded-full brightness-75">
        <img src={avatarUrl} alt="User avatar" />
      </div>
    </div>
  );
}

export default Avatar;
