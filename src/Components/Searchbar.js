import React from "react";
import "./searchbar.css";
import TuneIcon from "@mui/icons-material/Tune";
import ChannelRow from "./ChannalRow";
import ViedoRow from "./ViedoRow";

function Searchbar() {
  return (
    <div className="searchbar">
      <div className="search-filter">
        <TuneIcon />
        <h4>Filter</h4>
      </div>
      <hr />
      <ChannelRow
        image="/images/e.jpg"
        channelName="Sumit Programer"
        varified
        subs="546K"
        noOfViedos={654}
        desc="Do you want to become JavaScript Developer & make an income? I just dropped a FREE ONE hour video training"
      />
      <hr />
      <ViedoRow
        views="1.8M"
        subs="546"
        desc="which is the most commaon way to exercise daily"
        timestamp="48 hours ago"
        channel="Sumit Programer"
        title="Clone the tinder"
        image="/images/t.jpg"
      />
      <ViedoRow
        views="1.8M"
        subs="546"
        desc="which is the most commaon way to exercise daily"
        timestamp="48 hours ago"
        channel="Sumit Programer"
        title="Clone the tinder"
        image="/images/R2.jpg"
      />
      <ViedoRow
        views="1.8M"
        subs="546"
        desc="which is the most commaon way to exercise daily"
        timestamp="48 hours ago"
        channel="Sumit Programer"
        title="Clone the tinder"
        image="https://hdqwalls.com/wallpapers/2018-the-predator-movie-8k-5t.jpg"
      />
      <ViedoRow
        views="1.8M"
        subs="546"
        desc="which is the most commaon way to exercise daily"
        timestamp="48 hours ago"
        channel="Sumit Programer"
        title="Clone the tinder"
        image="https://i.pinimg.com/originals/ef/ec/a4/efeca473ffcdf5a522bdda88baded6fc.jpg"
      />
      <ViedoRow
        views="1.8M"
        subs="546"
        desc="which is the most commaon way to exercise daily"
        timestamp="48 hours ago"
        channel="Sumit Programer"
        title="Clone the tinder"
        image="https://images-geeknative-com.exactdn.com/wp-content/uploads/2020/10/09231518/horror-movie-villians.jpg"
      />
    </div>
  );
}

export default Searchbar;
