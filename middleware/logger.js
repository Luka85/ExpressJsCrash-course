import "colors";

const logger = (req, res, next) => {
  const methodColors = {
    GET: "green",
    POST: "blue",
    PUT: "yellow",
    DELETE: "red",
  };

  const color = methodColors[req.method] || "white";

  // ✅ This always works
  console.log(
    String(
      `${req.method} ${req.protocol}://${req.get("host")}${req.originalUrl}`
    )[color]
  );

  next();
};

export default logger;
