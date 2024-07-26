import { ListeningBar } from "../components/ListeningBar";
import { Navigation } from "../components/Navigation";

export const HomePage = () => {
  return (
    <div className="container max-w-screen mx-auto h-screen grid grid-cols-[auto_1fr_auto]">
      {/* Navigation on the far left */}
      <div className="h-full">
        <Navigation />
      </div>

      {/* Middle content that scrolls vertically */}
      <div className="overflow-y-scroll bg-slate-200">
        <div>
          <h1 className="bg-slate-700">Home</h1>
          {/* Add more content here to test vertical scrolling */}
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum interdum, nisi lorem egestas odio, vitae scelerisque enim ligula venenatis dolor. Maecenas nisl est, ultrices nec congue eget, auctor vitae massa. Fusce luctus vestibulum augue ut aliquet. Nunc sagittis dictum nisi, sed ullamcorper ipsum dignissim ac. In at libero sed nunc venenatis imperdiet sed ornare turpis. Donec vitae dui eget tellus gravida venenatis. Integer fringilla congue eros non fermentum. Sed dapibus pulvinar nibh tempor porta. Cras ac leo purus. Mauris quis diam velit.
          </p>
          {/* Add more content as needed */}
        </div>
      </div>

      {/* Listening bar on the far right */}
      <div className="h-full">
        <ListeningBar />
      </div>
    </div>
  );
};
