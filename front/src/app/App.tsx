import { RouterProvider } from 'react-router-dom';
import { Theme } from '@radix-ui/themes';

import { router } from '@/app/router/router.tsx';

function App() {
  return (
    <Theme accentColor="grass" grayColor="sage">
      <RouterProvider router={router} />
      {/*<ThemePanel />*/}
    </Theme>
  );
}

export default App;
