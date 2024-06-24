import { Container } from "@mui/material";
import { NameInputDialog } from "./Components";
import { useState } from "react";
import { useAppDispatch } from "./Lib/Store/hooks";

const App = () => {

  const [open, setOpen] = useState(true);

  const dispatch = useAppDispatch();
  

  return (
    <Container maxWidth="md" sx={{ background: 'red', backgroundColor: 'red'}}>
      <NameInputDialog open={open} handleClose={() => setOpen(false)}/>
    </Container>
  );
}

export default App;
