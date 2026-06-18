import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ScrollToTop } from "./components/ScrollToTop";

import Index from "./pages/Index";
import { CreateGoal } from "./pages/CreateGoal";
import { MyGoals } from "./pages/MyGoals";
import { GoalDetail } from "./pages/GoalDetail";
import { Leaderboard } from "./pages/Leaderboard";
import { RemoteLoginSuccess } from "./pages/RemoteLoginSuccess";
import { NIP19Page } from "./pages/NIP19Page";
import NotFound from "./pages/NotFound";

export function AppRouter() {
  const isGitHubPages = typeof window !== 'undefined' && window.location.hostname.includes('github.io');
  return (
    <BrowserRouter basename={isGitHubPages ? '/MindfulSats' : undefined}>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/create" element={<CreateGoal />} />
        <Route path="/my-goals" element={<MyGoals />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
        <Route path="/goal/:pubkey/:dTag" element={<GoalDetail />} />
        <Route path="/remoteloginsuccess" element={<RemoteLoginSuccess />} />
        {/* NIP-19 route for npub1, note1, naddr1, nevent1, nprofile1 */}
        <Route path="/:nip19" element={<NIP19Page />} />
        {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
export default AppRouter;