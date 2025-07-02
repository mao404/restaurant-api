import startServer from "./loaders";

const init = async (): Promise<void> => {
  await startServer();
};

init(); 