import React from "react";
import Column from "./Column";

const columns = [
  {
    img: "https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-81069.jpg",
    h1: "Fall at your fingertips",
    p: "Ordering your fall favorites is a snap with the app. Join Starbucks® Rewards and tap into fall.",
    button: "Join now",
    bgColor: "green-200",
    direction: "row",
  },
  {
    img: "https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-79582.png",
    h1: "Buy coffee, help grow a community",
    p: "We care deeply about coffee farmers and their communities. Your support helps us invest in the well-being of farmers across the world’s coffee-growing regions.",
    button: "Learn more",
    bgColor: "green-200",
    direction: "row-reverse",
  },
  {
    img: "https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-79284.jpg",
    h1: "The art of the roast",
    p: "With a new roast spectrum front and center on our coffee bags, it’s easier than ever to find a taste you love.",
    button: "Order now",
    bgColor: "green-500",
    direction: "row",
  },
  {
    img: "https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-79584.jpg",
    h1: "Nitro all fall long",
    p: "Ready on tap, super-smooth Nitro Cold Brew. For a silky twist, try Vanilla Sweet Cream Nitro Cold Brew.",
    button: "Order now",
    bgColor: "green-500",
    direction: "row-reverse",
  },
  {
    img: "https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-79585.jpg",
    h1: "Deliciously protein-packed",
    p: "Keep on the move with a Bacon, Gouda & Egg Sandwich or Egg White & Roasted Red Pepper Egg Bites.",
    button: "Learn more",
    bgColor: "green-500",
    direction: "row",
  },
  {
    img: "https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-81070.jpg",
    h1: "Celebrate Latinx Heritage Month",
    p: "See how the Starbucks Hora del Café Partner (employee) Network is taking action to build stronger and kinder communities for all.",
    button: "Learn more",
    bgColor: "green-200",
    direction: "row-reverse",
  },
];

export default function Main() {
  return (
    <main>
      {columns.map((col) => {
        return <Column {...col} />;
      })}
    </main>
  );
}
