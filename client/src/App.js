import { CardHeader } from '@material-ui/core';
import SimpleTabs from './views/TabPanel'

function App() {
  return (
    <>
      <CardHeader
        component="h1"
        title="Authors App"
        subheader="Favourite Authors"
      />
      <SimpleTabs />
    </>
  );
}

export default App;
