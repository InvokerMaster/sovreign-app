import ConnectAccount from "@/components/connectAccount";
import useWeb3Store from "@/hooks/useWeb3Store";
import ProposalsView from "@/views/proposals";

function ProposalsPage() {
  const account = useWeb3Store((state) => state.account);

  if (account) return <ProposalsView />;

  return <ConnectAccount />;
}

export default ProposalsPage;
