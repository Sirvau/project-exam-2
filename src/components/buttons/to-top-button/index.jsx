import { Link } from 'react-scroll';
import { chevronUp } from '../../icons';

export function ToTopButton() {
  return (
    <div>
      <Link to="header">
        <button
          type="button"
          className="btn btn-md bg-primary border-1 border-overlayLighter hover:border-overlayLight hover:bg-overlayLight rounded-full w-40 text-tBase text-sm tracking-wider">
          To top {chevronUp}
        </button>
      </Link>
    </div>
  );
}

export default ToTopButton;
