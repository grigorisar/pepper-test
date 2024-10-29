<script lang="ts">
  import type { LayoutData } from './$types';

  export let data: LayoutData;

  import Drawer, { AppContent, Content, Header, Title, Subtitle } from '@smui/drawer';
  import Button, { Label } from '@smui/button';
  import List, { Item, Text, Separator, Graphic } from '@smui/list';

  let open = true;
  let active = 'Overview';

  type DrawerItem = 'Overview' | 'Summary';

  function drawerNavigation(value: DrawerItem) {
    active = value;
  }

  function handleItemClick(item: string) {
    console.log(item);
  }
</script>

<div class="drawer-container">
  <Drawer variant="dismissible" bind:open>
    <Header>
      <Title>Time Tracker</Title>
      <Subtitle>Select a view.</Subtitle>
    </Header>
    <!-- <Separator /> -->
    <Content>
      <List>
        <Item
          href="javascript:void(0)"
          on:click={() => drawerNavigation('Overview')}
          activated={active === 'Overview'}
        >
          <Graphic class="material-icons">send</Graphic>
          <Text>Overview</Text>
        </Item>
        <!-- <Separator /> -->

        <Item
          href="javascript:void(0)"
          on:click={() => drawerNavigation('Summary')}
          activated={active === 'Summary'}
        >
          <Graphic class="material-icons">archive</Graphic>
          <Text>Summary</Text>
        </Item>
      </List>
    </Content>
  </Drawer>

  <AppContent class="app-content">
    <Button on:click={() => (open = !open)}>
      <Label>Toggle Drawer</Label>
    </Button>
    <!-- <div class="main-content"> -->
    <slot {drawerNavigation} />
    <!-- </div> -->
  </AppContent>
</div>

<style>
  :global(.mdc-drawer) {
    height: inherit;
  }

  :global(.mdc-deprecated-list) {
    /* height: 100%; */
    display: flex;
    flex-direction: column;
  }

  * :global(.app-content) {
    flex: auto;
    overflow: auto;
    position: relative;
    flex-grow: 1;
  }

  /* These classes are only needed because the
    drawer is in a container on the page. */
  .drawer-container {
    position: relative;
    display: flex;
    height: calc(100vh - 154px);
    border-bottom: 1px solid rgba(0, 0, 0, 0.12);
    border: 1px solid var(--mdc-theme-text-hint-on-background, rgba(0, 0, 0, 0.1));
    overflow: hidden;
    z-index: 0;
  }
</style>
