import { Outlet } from "umi";

export default function Now() {
  return (
    <div>
        <Outlet />
        <footer style={{width: '100%', height: '50px', position: 'fixed', left: '0', bottom: '0', lineHeight: '50px', textAlign: 'center'}}>
        <ul style={{listStyle: 'none', display: 'flex', justifyContent: 'space-around'}}>
            <li>home</li>
            <li>user</li>
            <li>my</li>
        </ul>
    </footer>
    </div>
  );
}
