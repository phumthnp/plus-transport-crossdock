const initialOrders = [
  { id: "TO-001", code: "T/O XXX-XXX-X01", product: "คริสตัล", customer: "เฮียบิ๊ก", origin: "โรงงาน ปทุมธานี", totalQty: 1000, weightPerPack: 1.0, allocations: [] },
  { id: "TO-002", code: "T/O XXX-XXX-X01", product: "เอส", customer: "เฮียบิ๊ก", origin: "โรงงาน ปทุมธานี", totalQty: 800, weightPerPack: 1.0, allocations: [] },
  { id: "TO-003", code: "T/O XXX-XXX-X01", product: "คริสตัล", customer: "เฮียพูล", origin: "โรงงาน ปทุมธานี", totalQty: 1000, weightPerPack: 1.0, allocations: [] },
  { id: "TO-004", code: "T/O XXX-XXX-X01", product: "เอส", customer: "เฮียพูล", origin: "โรงงาน ปทุมธานี", totalQty: 800, weightPerPack: 1.0, allocations: [] },
  { id: "TO-005", code: "T/O XXX-XXX-X01", product: "ช้างคลาสสิก", customer: "เฮียบิ๊ก", origin: "โรงงาน อยุธยา", totalQty: 1000, weightPerPack: 1.0, allocations: [] },
  { id: "TO-006", code: "T/O XXX-XXX-X01", product: "ช้างโคลด์บรูว", customer: "เฮียบิ๊ก", origin: "โรงงาน อยุธยา", totalQty: 1000, weightPerPack: 1.0, allocations: [] },
  { id: "TO-007", code: "T/O XXX-XXX-X03", product: "อาชา", customer: "เฮียบิ๊ก", origin: "โรงงาน อยุธยา", totalQty: 1000, weightPerPack: 1.0, allocations: [] },
  { id: "TO-008", code: "T/O XXX-XXX-X02", product: "ช้างคลาสสิก", customer: "เฮียพูล", origin: "โรงงาน อยุธยา", totalQty: 1000, weightPerPack: 1.0, allocations: [] },
  { id: "TO-009", code: "T/O XXX-XXX-X02", product: "แรงเงอร์", customer: "เฮียพูล", origin: "โรงงาน สมุทรสาคร", totalQty: 500, weightPerPack: 1.0, allocations: [] },
  { id: "TO-010", code: "T/O XXX-XXX-X02", product: "คาร์เนชั่น", customer: "เฮียพูล", origin: "โรงงาน สมุทรปราการ", totalQty: 500, weightPerPack: 1.0, allocations: [] }
];

const availableTOCatalog = [
  {
    code: "TO2603250008",
    tr: "OC-L53574-2603250008",
    ref: "P2603250121",
    priority: "ด่วน",
    type: "Multi-Origin",
    shipDate: "23/04/2026",
    requestDate: "27/04/2026",
    lines: [
      { sku: "710000901", product: "คริสตัล", customer: "เฮียเมฆ", origin: "โรงงาน ปทุมธานี", qty: 900, unit: "แพ็ก", weightPerPack: 1.0 },
      { sku: "710000902", product: "ช้างคลาสสิก", customer: "เฮียเมฆ", origin: "โรงงาน อยุธยา", qty: 1000, unit: "แพ็ก", weightPerPack: 1.0 },
      { sku: "710000903", product: "แรงเงอร์", customer: "เฮียเมฆ", origin: "โรงงาน สมุทรสาคร", qty: 600, unit: "แพ็ก", weightPerPack: 1.0 }
    ]
  },
  {
    code: "TO2603250004",
    tr: "OC-L53574-2603250001",
    ref: "P2603250117",
    priority: "ปกติ",
    type: "Warehouse-Factory",
    shipDate: "20/04/2026",
    requestDate: "24/04/2026",
    lines: [
      { sku: "710000142", product: "เบียร์ช้าง", customer: "เฮียหนุ่ม", origin: "โรงงาน ปทุมธานี", qty: 1200, unit: "แพ็ก", weightPerPack: 1.0 },
      { sku: "710000222", product: "เบียร์อาชา", customer: "เฮียหนุ่ม", origin: "โรงงาน ปทุมธานี", qty: 700, unit: "แพ็ก", weightPerPack: 1.0 }
    ]
  },
  {
    code: "TO2603250005",
    tr: "OC-L53574-2603250002",
    ref: "P2603250118",
    priority: "ปกติ",
    type: "Warehouse-Factory",
    shipDate: "20/04/2026",
    requestDate: "24/04/2026",
    lines: [
      { sku: "710000444", product: "คริสตัล", customer: "เฮียพลอย", origin: "โรงงาน อยุธยา", qty: 900, unit: "แพ็ก", weightPerPack: 1.0 },
      { sku: "710000555", product: "น้ำดื่มช้าง", customer: "เฮียพลอย", origin: "โรงงาน อยุธยา", qty: 500, unit: "แพ็ก", weightPerPack: 1.0 }
    ]
  },
  {
    code: "TO2603250006",
    tr: "OC-L53574-2603250003",
    ref: "P2603250119",
    priority: "ด่วน",
    type: "Warehouse-Factory",
    shipDate: "21/04/2026",
    requestDate: "25/04/2026",
    lines: [
      { sku: "140000666", product: "เอส", customer: "เฮียชัย", origin: "โรงงาน สมุทรสาคร", qty: 700, unit: "แพ็ก", weightPerPack: 1.0 }
    ]
  },
  {
    code: "TO2603250007",
    tr: "OC-L53574-2603250004",
    ref: "P2603250120",
    priority: "ปกติ",
    type: "Warehouse-Factory",
    shipDate: "22/04/2026",
    requestDate: "26/04/2026",
    lines: [
      { sku: "150000777", product: "คาร์เนชั่น", customer: "เฮียก้อง", origin: "โรงงาน สมุทรปราการ", qty: 600, unit: "แพ็ก", weightPerPack: 1.0 },
      { sku: "150000778", product: "แรงเงอร์", customer: "เฮียก้อง", origin: "โรงงาน สมุทรปราการ", qty: 500, unit: "แพ็ก", weightPerPack: 1.0 }
    ]
  }
];

const hubCatalog = ["HUB-บางนา", "HUB-หลักสี่", "HUB-ระยอง", "HUB-บางบอน", "HUB-พัทยา"];

let state;
let dragged = null;
let activeAllocation = null;
let activeTruckLoad = null;
let activeQuantityMove = null;
let selectedTruckItem = null;
let selectedTruckItems = new Set();
let selectedSourceItems = new Set();
let selectedAllocationItems = new Set();
let selectedRoutePickups = new Set();
let selectedRouteDrops = new Set();
let selectedHubOutboundItems = new Set();
let activeRouteOrderId = null;
let draftTOSelection = new Set();
let expandedTOSelection = new Set();
let toPickerSearchText = "";
let selectedTOCollapsed = false;
let mockTOCounter = 1;
let zoomLevel = 1;
let activeOriginLocation = null;
let activeHubId = null;
let hubPickerSearchText = "";

const els = {
  summaryStrip: document.querySelector("#summaryStrip"),
  selectedTOList: document.querySelector("#selectedTOList"),
  addTOButton: document.querySelector("#addTOButton"),
  toggleTOPanelButton: document.querySelector("#toggleTOPanelButton"),
  originList: document.querySelector("#originList"),
  originDetail: document.querySelector("#originDetail"),
  hubList: document.querySelector("#hubList"),
  addHubButton: document.querySelector("#addHubButton"),
  deliveryList: document.querySelector("#deliveryList"),
  truckCanvas: document.querySelector("#truckCanvas"),
  zoomOutButton: document.querySelector("#zoomOutButton"),
  zoomInButton: document.querySelector("#zoomInButton"),
  zoomLabel: document.querySelector("#zoomLabel"),
  addTruckButton: document.querySelector("#addTruckButton"),
  resetButton: document.querySelector("#resetButton"),
  template: document.querySelector("#toCardTemplate"),
  dialog: document.querySelector("#allocationDialog"),
  allocationForm: document.querySelector("#allocationForm"),
  modalTitle: document.querySelector("#modalTitle"),
  modalOrderSummary: document.querySelector("#modalOrderSummary"),
  modalQty: document.querySelector("#modalQty"),
  modalHelper: document.querySelector("#modalHelper"),
  confirmModalButton: document.querySelector("#confirmModalButton"),
  closeModalButton: document.querySelector("#closeModalButton"),
  cancelModalButton: document.querySelector("#cancelModalButton")
};

els.toPickerDialog = document.querySelector("#toPickerDialog");
els.toPickerList = document.querySelector("#toPickerList");
els.toPickerSearch = document.querySelector("#toPickerSearch");
els.toPickerCount = document.querySelector("#toPickerCount");
els.toPickerWeight = document.querySelector("#toPickerWeight");
els.confirmTOPickerButton = document.querySelector("#confirmTOPickerButton");
els.cancelTOPickerButton = document.querySelector("#cancelTOPickerButton");
els.closeTOPickerButton = document.querySelector("#closeTOPickerButton");
els.mockTOButton = document.querySelector("#mockTOButton");
els.hubPickerDialog = document.querySelector("#hubPickerDialog");
els.hubPickerList = document.querySelector("#hubPickerList");
els.hubPickerSearch = document.querySelector("#hubPickerSearch");
els.hubPickerCount = document.querySelector("#hubPickerCount");
els.cancelHubPickerButton = document.querySelector("#cancelHubPickerButton");
els.closeHubPickerButton = document.querySelector("#closeHubPickerButton");

function createInitialState() {
  return {
    orders: structuredClone(initialOrders),
    trucks: [createTruck("Dummy", "")],
    hubs: [],
    nextTruck: 2,
    nextHub: 1,
    nextOrder: initialOrders.length + 1,
    nextAllocation: 1
  };
}

function createTruck(plate = "Dummy", origin = "", options = {}) {
  return {
    id: crypto.randomUUID(),
    plate: plate || "Dummy",
    origin,
    sourceType: options.sourceType || "ORIGIN",
    sourceLabel: options.sourceLabel || origin,
    parentTruckId: options.parentTruckId || null,
    parentHubDestination: options.parentHubDestination || null,
    type: "เลือกประเภทรถ",
    capacity: 6000,
    itemIds: [],
    destinations: [],
    routeStops: [],
    originSequence: origin ? [origin] : []
  };
}

function orderById(id) {
  return state.orders.find(order => order.id === id);
}

function routeIdsAttr(ids) {
  return [...new Set(ids.filter(Boolean))].join(",");
}

function elementHasRouteOrder(element, orderId = activeRouteOrderId) {
  if (!element || !orderId) return false;
  return (element.dataset.routeOrderIds || "")
    .split(",")
    .filter(Boolean)
    .includes(orderId);
}

function toggleRouteHighlight(orderId) {
  activeRouteOrderId = activeRouteOrderId === orderId ? null : orderId;
  render();
}

function truckById(id) {
  return state.trucks.find(truck => truck.id === id);
}

function allocationsForTruck(truckId) {
  return state.orders.flatMap(order =>
    order.allocations
      .filter(allocation => allocation.truckId === truckId)
      .map(allocation => ({ ...allocation, order }))
  );
}

function unassignedQty(order) {
  const allocated = order.allocations
    .filter(allocation => allocation.status !== "MOVED_FROM_HUB")
    .reduce((sum, allocation) => sum + allocation.qty, 0);
  return order.totalQty - allocated;
}

function qtyInTruck(order, truckId) {
  return order.allocations
    .filter(allocation => allocation.truckId === truckId && allocation.destination === "TRUCK")
    .reduce((sum, allocation) => sum + allocation.qty, 0);
}

function routeQtyForTruck(order, truckId) {
  return order.allocations
    .filter(allocation => allocation.truckId === truckId && allocation.status !== "MOVED_FROM_HUB")
    .reduce((sum, allocation) => sum + allocation.qty, 0);
}

function truckWeight(truck) {
  return truck.itemIds.reduce((sum, orderId) => {
    const order = orderById(orderId);
    return sum + routeQtyForTruck(order, truck.id) * order.weightPerPack;
  }, 0);
}

function routeAllocationsForTruck(truckId) {
  return allocationsForTruck(truckId).filter(allocation =>
    allocation.destination !== "TRUCK" && allocation.status !== "MOVED_FROM_HUB"
  );
}

function shortLocationName(location) {
  return location.replace(/^โรงงาน\s*/, "");
}

function createRouteStop(type, location) {
  return {
    id: crypto.randomUUID(),
    type,
    location,
    allocationIds: []
  };
}

function stopLabel(stop) {
  if (stop.type === "PICK") return `PICK - ${shortLocationName(stop.location)}`;
  if (stop.type === "OUTBOUND") return `OUTBOUND - ${stop.location}`;
  if (stop.type === "INBOUND") return `INBOUND - ${stop.location}`;
  return `DROP - ${stop.location}`;
}

function pickupLikeStopAt(truck, location) {
  return (truck.routeStops || []).find(stop =>
    (stop.type === "PICK" || stop.type === "OUTBOUND") && stop.location === location
  );
}

function pickupStopModes(stop, allocations = []) {
  const modes = new Set();
  if (stop.type === "PICK") modes.add("PICK");
  if (stop.type === "OUTBOUND") modes.add("OUTBOUND");
  if (stop.type === "INBOUND") modes.add("INBOUND");
  if (stop.type === "DROP") modes.add("DROP");
  allocations.forEach(allocation => {
    if (allocation.sourceTransferName || allocation.sourceHubName || allocation.sourceTransferType) modes.add("OUTBOUND");
    else if (stop.type === "PICK" || stop.type === "OUTBOUND") modes.add("PICK");
  });
  const order = ["PICK", "OUTBOUND", "INBOUND", "DROP"];
  return [...modes].sort((a, b) => order.indexOf(a) - order.indexOf(b));
}

function stopHeading(stop, allocations = []) {
  const modes = pickupStopModes(stop, allocations);
  return `
    <div class="stop-title-tags">${modes.map(mode => `<span>${mode}</span>`).join("")}</div>
    <h3>${stop.type === "DROP" ? stop.location : shortLocationName(stop.location)}</h3>
  `;
}

function stopById(truck, stopId) {
  return (truck.routeStops || []).find(stop => stop.id === stopId);
}

function allocationById(allocationId) {
  return findAllocation(allocationId);
}

function addAllocationToStop(stop, allocationId) {
  if (!stop.allocationIds.includes(allocationId)) stop.allocationIds.push(allocationId);
}

function removeAllocationFromStops(truck, allocationId) {
  truck.routeStops = (truck.routeStops || [])
    .map(stop => ({ ...stop, allocationIds: stop.allocationIds.filter(id => id !== allocationId) }))
    .filter(stop => stop.allocationIds.length > 0);
  selectedRoutePickups = new Set([...selectedRoutePickups].filter(key => parseRoutePickupKey(key).allocationId !== allocationId));
  selectedRouteDrops = new Set([...selectedRouteDrops].filter(key => parseRouteDropKey(key).allocationId !== allocationId));
  selectedHubOutboundItems.delete(allocationId);
}

function ensureAutoRouteStops(truck, allocation, order) {
  truck.routeStops ||= [];
  let pickup = pickupLikeStopAt(truck, order.origin);
  if (!pickup) {
    pickup = createRouteStop("PICK", order.origin);
    const firstDropIndex = truck.routeStops.findIndex(stop => stop.type === "DROP");
    if (firstDropIndex >= 0) truck.routeStops.splice(firstDropIndex, 0, pickup);
    else truck.routeStops.push(pickup);
  }
  addAllocationToStop(pickup, allocation.id);

  let drop = truck.routeStops.find(stop => stop.type === "DROP" && stop.location === order.customer);
  if (!drop) {
    drop = createRouteStop("DROP", order.customer);
    truck.routeStops.push(drop);
  }
  addAllocationToStop(drop, allocation.id);
}

function ensureHubOutboundRouteStops(truck, allocation, order, hubName) {
  truck.routeStops ||= [];
  let outbound = pickupLikeStopAt(truck, hubName);
  if (!outbound) {
    outbound = createRouteStop("OUTBOUND", hubName);
    const firstDropIndex = truck.routeStops.findIndex(stop => stop.type === "DROP");
    if (firstDropIndex >= 0) truck.routeStops.splice(firstDropIndex, 0, outbound);
    else truck.routeStops.push(outbound);
  }
  addAllocationToStop(outbound, allocation.id);

  let drop = truck.routeStops.find(stop => stop.type === "DROP" && stop.location === order.customer);
  if (!drop) {
    drop = createRouteStop("DROP", order.customer);
    truck.routeStops.push(drop);
  }
  addAllocationToStop(drop, allocation.id);
}

function compactRouteStops(truck) {
  truck.routeStops = (truck.routeStops || []).filter(stop => stop.allocationIds.some(allocationId => allocationById(allocationId)));
}

function routePickupKey(allocationId, fromStopId) {
  return `${fromStopId}:${allocationId}`;
}

function parseRoutePickupKey(key) {
  const [fromStopId, allocationId] = key.split(":");
  return { fromStopId, allocationId };
}

function selectedPickupIdsForStop(fromStopId, fallbackAllocationId = null) {
  const ids = [...selectedRoutePickups]
    .map(parseRoutePickupKey)
    .filter(selection => selection.fromStopId === fromStopId)
    .map(selection => selection.allocationId);
  return ids.length ? ids : (fallbackAllocationId ? [fallbackAllocationId] : []);
}

function clearRoutePickupSelection() {
  selectedRoutePickups.clear();
}

function routeDropKey(allocationId, fromStopId) {
  return `${fromStopId}:${allocationId}`;
}

function parseRouteDropKey(key) {
  const [fromStopId, allocationId] = key.split(":");
  return { fromStopId, allocationId };
}

function selectedDropIdsForStop(fromStopId, fallbackAllocationId = null) {
  const ids = [...selectedRouteDrops]
    .map(parseRouteDropKey)
    .filter(selection => selection.fromStopId === fromStopId)
    .map(selection => selection.allocationId);
  return ids.length ? ids : (fallbackAllocationId ? [fallbackAllocationId] : []);
}

function clearRouteDropSelection() {
  selectedRouteDrops.clear();
}

function selectedHubOutboundIds(fallbackId = null) {
  return selectedHubOutboundItems.size ? [...selectedHubOutboundItems] : (fallbackId ? [fallbackId] : []);
}

function clearHubOutboundSelection() {
  selectedHubOutboundItems.clear();
}

function clearActionSelections(except = null) {
  if (except !== "source" && except !== "location-source") selectedSourceItems.clear();
  if (except !== "route-pickup") clearRoutePickupSelection();
  if (except !== "route-drop") clearRouteDropSelection();
  if (except !== "hub-outbound" && except !== "location-source" && except !== "location-outbound") clearHubOutboundSelection();
  if (except !== "hub-inbound") clearAllocationSelection();
  if (except !== "truck") {
    selectedTruckItems.clear();
    selectedTruckItem = null;
  }
}

function canSplitPickupStop(truck, allocationIds, fromStopId, requestedIndex) {
  const ids = Array.isArray(allocationIds) ? allocationIds : [allocationIds];
  if (!truck || !ids.length) return false;
  const fromStop = stopById(truck, fromStopId);
  if (!fromStop) return false;
  const dropIndexes = ids.map(allocationId => (truck.routeStops || []).findIndex(stop =>
    stop.type === "DROP" && stop.allocationIds.includes(allocationId)
  ));
  if (dropIndexes.some(index => index < 0)) return false;
  const currentPickIndex = truck.routeStops.findIndex(stop => stop.id === fromStopId);
  const firstDropIndex = Math.min(...dropIndexes);
  const insertIndex = Math.max(0, Math.min(requestedIndex, truck.routeStops.length));
  const movesEntireStop = fromStop.allocationIds.every(id => ids.includes(id));
  return insertIndex <= firstDropIndex &&
    insertIndex !== currentPickIndex &&
    (!movesEntireStop || insertIndex !== currentPickIndex + 1);
}

function canSplitRouteStop(truck, allocationIds, fromStopId, requestedIndex) {
  const ids = Array.isArray(allocationIds) ? allocationIds : [allocationIds];
  const fromStop = stopById(truck, fromStopId);
  if (!fromStop) return false;
  if (fromStop.type === "PICK" || fromStop.type === "OUTBOUND") {
    return canSplitPickupStop(truck, ids, fromStopId, requestedIndex);
  }
  const currentIndex = truck.routeStops.findIndex(stop => stop.id === fromStopId);
  let insertIndex = Math.max(0, Math.min(requestedIndex, truck.routeStops.length));
  const movesEntireStop = fromStop.allocationIds.every(id => ids.includes(id));
  if (insertIndex === currentIndex || (movesEntireStop && insertIndex === currentIndex + 1)) return false;

  const nextStops = truck.routeStops.map(stop => ({
    ...stop,
    allocationIds: stop.allocationIds.filter(id => !(stop.id === fromStopId && ids.includes(id)))
  }));
  if (!nextStops[currentIndex].allocationIds.length) {
    nextStops.splice(currentIndex, 1);
    if (currentIndex < insertIndex) insertIndex -= 1;
  }
  const newStop = createRouteStop(fromStop.type, fromStop.location);
  newStop.allocationIds.push(...ids);
  nextStops.splice(insertIndex, 0, newStop);
  return routeStopsAreValid(nextStops);
}

function routeStopsAreValid(routeStops) {
  const picked = new Set();
  for (const stop of routeStops || []) {
    if (stop.type === "PICK" || stop.type === "OUTBOUND") {
      stop.allocationIds.forEach(id => picked.add(id));
      continue;
    }
    if (stop.allocationIds.some(id => !picked.has(id))) {
      return false;
    }
  }
  return true;
}

function moveAllocationsToPickupStop(truckId, allocationIds, fromStopId, targetStopId) {
  const truck = truckById(truckId);
  const fromStop = stopById(truck, fromStopId);
  const targetStop = stopById(truck, targetStopId);
  const ids = [...new Set((Array.isArray(allocationIds) ? allocationIds : [allocationIds]).filter(Boolean))];
  if (!truck || !fromStop || !targetStop || !ids.length) return false;
  if (fromStop.id === targetStop.id || targetStop.type !== fromStop.type) return false;
  if (fromStop.location !== targetStop.location) return false;

  const nextStops = truck.routeStops.map(stop => ({
    ...stop,
    allocationIds: stop.allocationIds.filter(id => !(stop.id === fromStopId && ids.includes(id)))
  }));
  const target = nextStops.find(stop => stop.id === targetStopId);
  ids.forEach(id => addAllocationToStop(target, id));
  const compacted = nextStops.filter(stop => stop.allocationIds.length > 0);
  if (!routeStopsAreValid(compacted)) return false;

  truck.routeStops = compacted;
  clearRoutePickupSelection();
  clearRouteDropSelection();
  render();
  return true;
}

function moveRouteStopToIndex(truckId, fromStopId, requestedIndex) {
  const truck = truckById(truckId);
  if (!truck) return false;
  const fromIndex = truck.routeStops.findIndex(stop => stop.id === fromStopId);
  if (fromIndex < 0) return false;
  let insertIndex = Math.max(0, Math.min(requestedIndex, truck.routeStops.length));
  if (insertIndex === fromIndex || insertIndex === fromIndex + 1) return false;

  const nextStops = truck.routeStops.map(stop => ({ ...stop, allocationIds: [...stop.allocationIds] }));
  const [moved] = nextStops.splice(fromIndex, 1);
  if (fromIndex < insertIndex) insertIndex -= 1;
  nextStops.splice(insertIndex, 0, moved);
  if (!routeStopsAreValid(nextStops)) return false;

  truck.routeStops = nextStops;
  clearRoutePickupSelection();
  render();
  return true;
}

function truckOrigins(truck) {
  if (truck.sourceType === "HUB" && truck.itemIds.length) return ["HUB"];
  return [...new Set(truck.itemIds.map(orderById).filter(Boolean).map(order => order.origin))];
}

function planOrigins(truck) {
  const origins = truckOrigins(truck);
  const ordered = (truck.originSequence || []).filter(origin => origins.includes(origin));
  const missing = origins.filter(origin => !ordered.includes(origin));
  return [...ordered, ...missing];
}

function syncTruckOrigins(truck) {
  const origins = truckOrigins(truck);
  truck.originSequence = planOrigins(truck);
  truck.origin = origins.join(", ");
}

function ensureOriginSequence(truck, origin) {
  truck.originSequence ||= [];
  if (origin && !truck.originSequence.includes(origin)) {
    truck.originSequence.push(origin);
  }
}

function truckHasPlanForOrigin(truck, origin) {
  return truck.itemIds.some(orderId => orderById(orderId)?.origin === origin);
}

function truckItemsByOrigin(truck) {
  return truck.itemIds.reduce((groups, orderId) => {
    const order = orderById(orderId);
    if (!order) return groups;
    const origin = truck.sourceType === "HUB" ? "HUB" : order.origin;
    groups[origin] ||= [];
    groups[origin].push(order);
    return groups;
  }, {});
}

function truckOpenItems(truck) {
  return truck.itemIds
    .map(orderById)
    .filter(order => qtyInTruck(order, truck.id) > 0);
}

function isHubDestination(destination) {
  return destination === "HUB" || destination?.startsWith("HUB#");
}

function destinationLabel(destination) {
  return isHubDestination(destination) ? "HUB" : destination;
}

function nextHubDestination(truck) {
  const hubCount = truck.destinations.filter(isHubDestination).length;
  return hubCount === 0 ? "HUB" : `HUB#${hubCount + 1}`;
}

function calculateDestinationOptions(truck) {
  const customers = [...new Set(truckOpenItems(truck).map(order => order.customer))];
  if (!customers.length) return [];
  const customerOptions = customers.filter(destination => !truck.destinations.includes(destination));
  return [nextHubDestination(truck), ...customerOptions];
}

function addDestinationPlaceholder(truckId, destination) {
  const truck = truckById(truckId);
  if (!truck || truck.destinations.includes(destination)) return;
  truck.destinations.push(destination);
  render();
}

function moveDestination(truckId, index, direction) {
  const truck = truckById(truckId);
  const targetIndex = index + direction;
  if (!truck || targetIndex < 0 || targetIndex >= truck.destinations.length) return;

  const [destination] = truck.destinations.splice(index, 1);
  truck.destinations.splice(targetIndex, 0, destination);
  render();
}

function removeDestination(truckId, destination) {
  const truck = truckById(truckId);
  if (!truck) return;

  const allocations = allocationsForTruck(truckId)
    .filter(allocation => allocation.destination === destination && allocation.status !== "MOVED_FROM_HUB");
  if (allocations.length && !confirm("ปลายทางนี้มีสินค้าอยู่ ต้องการลบและคืนสินค้ากลับเข้ารถหรือไม่?")) return;

  allocations.forEach(({ order, allocation }) => {
    order.allocations = order.allocations.filter(item => item.id !== allocation.id);
    if (!truck.itemIds.includes(order.id)) truck.itemIds.push(order.id);
    ensureOriginSequence(truck, order.origin);
    order.allocations.push({
      id: `A-${state.nextAllocation++}`,
      truckId,
      destination: "TRUCK",
      status: "IN_TRUCK",
      qty: allocation.qty,
      timestamp: Date.now()
    });
  });

  truck.destinations = truck.destinations.filter(item => item !== destination);
  syncTruckOrigins(truck);
  render();
}

function moveOrigin(truckId, index, direction) {
  const truck = truckById(truckId);
  if (!truck) return;

  truck.originSequence = planOrigins(truck);
  const targetIndex = index + direction;
  if (targetIndex < 0 || targetIndex >= truck.originSequence.length) return;

  const [origin] = truck.originSequence.splice(index, 1);
  truck.originSequence.splice(targetIndex, 0, origin);
  render();
}

function addToTruck(truckId, orderId, qty = unassignedQty(orderById(orderId)), options = {}) {
  const truck = truckById(truckId);
  const order = orderById(orderId);

  if (!truck || !order || qty <= 0 || qty > unassignedQty(order)) return;
  if (!truck.itemIds.includes(orderId)) truck.itemIds.push(orderId);
  ensureOriginSequence(truck, order.origin);
  syncTruckOrigins(truck);

  const shouldAutoRoute = options.autoRoute !== false && truck.sourceType !== "HUB";
  const destination = shouldAutoRoute ? order.customer : "TRUCK";
  if (shouldAutoRoute && !truck.destinations.includes(destination)) {
    truck.destinations.push(destination);
  }

  const allocation = {
    id: `A-${state.nextAllocation++}`,
    truckId,
    destination,
    status: shouldAutoRoute ? "ASSIGNED" : "IN_TRUCK",
    qty,
    autoRoute: shouldAutoRoute,
    timestamp: Date.now()
  };
  order.allocations.push(allocation);
  if (shouldAutoRoute) ensureAutoRouteStops(truck, allocation, order);

  if (!options.skipRender) render();
}

function addManyToTruck(truckId, orderIds) {
  const uniqueIds = [...new Set(orderIds)];
  uniqueIds.forEach(orderId => {
    const order = orderById(orderId);
    const qty = order ? unassignedQty(order) : 0;
    if (qty > 0) addToTruck(truckId, orderId, qty, { skipRender: true });
  });
  selectedSourceItems.clear();
  render();
}

function openQuantityMoveModal({ title, items, helper, onConfirm }) {
  const validItems = items.filter(item => item.max > 0);
  if (!validItems.length) return;
  activeTruckLoad = null;
  activeAllocation = null;
  activeQuantityMove = { items: validItems, onConfirm };
  els.modalTitle.textContent = title;
  const qtyLabel = els.modalQty.closest("label");

  if (validItems.length === 1) {
    const item = validItems[0];
    if (qtyLabel) qtyLabel.hidden = false;
    els.modalOrderSummary.innerHTML = item.summary;
    els.modalQty.max = item.max;
    els.modalQty.value = item.max;
    els.modalQty.disabled = false;
    els.modalHelper.textContent = helper || `เลือกได้สูงสุด ${item.max.toLocaleString()} แพ็ก`;
  } else {
    if (qtyLabel) qtyLabel.hidden = true;
    els.modalQty.value = 1;
    els.modalQty.max = 1;
    els.modalQty.disabled = true;
    els.modalOrderSummary.innerHTML = validItems.map(item => `
      <label class="batch-qty-row">
        <span>${item.summary}</span>
        <input type="number" min="0" max="${item.max}" step="1" value="${item.max}" data-item-id="${item.id}">
      </label>
    `).join("");
    els.modalHelper.textContent = helper || "ระบุจำนวนที่ต้องการย้ายต่อรายการ หากไม่ต้องการย้ายบางรายการให้ใส่ 0";
  }
  els.dialog.showModal();
}

function closeQuantityModal() {
  activeQuantityMove = null;
  const qtyLabel = els.modalQty.closest("label");
  if (qtyLabel) qtyLabel.hidden = false;
  els.modalQty.disabled = false;
}

function orderMoveSummary(order, extra = "") {
  return `
    <strong>${order.product}</strong><br>
    ${order.code}${extra ? `<br>${extra}` : ""}
  `;
}

function allocationMoveSummary(order, allocation, extra = "") {
  return `
    <strong>${order.product}</strong><br>
    ${order.code}<br>
    ${allocation.qty.toLocaleString()} แพ็ก${extra ? `<br>${extra}` : ""}
  `;
}

function openSourceToTruckQuantityModal(truckId, orderIds) {
  const items = [...new Set(orderIds)]
    .map(orderId => {
      const order = orderById(orderId);
      return order ? {
        id: order.id,
        orderId: order.id,
        max: unassignedQty(order),
        summary: orderMoveSummary(order, `ลูกค้า: ${order.customer}<br>ต้นทาง: ${order.origin}`)
      } : null;
    })
    .filter(Boolean);
  openQuantityMoveModal({
    title: "นำสินค้าขึ้นรถ",
    items,
    onConfirm: qtyById => {
      items.forEach(item => {
        const qty = qtyById.get(item.id) || 0;
        if (qty > 0) addToTruck(truckId, item.orderId, qty, { skipRender: true });
      });
      selectedSourceItems.clear();
      render();
    }
  });
}

function selectedLocationOutboundIds(location) {
  return [...selectedHubOutboundItems].filter(allocationId => {
    const found = allocationById(allocationId);
    const transferName = found?.allocation.hubName || found?.allocation.transferLocationName;
    return found?.allocation.status === "STAGED_IN_HUB" && (!location || transferName === location);
  });
}

function openLocationLoadQuantityModal(truckId, orderIds = [], allocationIds = []) {
  const sourceItems = [...new Set(orderIds)]
    .map(orderId => {
      const order = orderById(orderId);
      return order ? {
        id: `SRC:${order.id}`,
        sourceId: order.id,
        max: unassignedQty(order),
        summary: orderMoveSummary(order, `ลูกค้า: ${order.customer}<br>ต้นทาง: ${order.origin}`)
      } : null;
    })
    .filter(Boolean);
  const outboundItems = [...new Set(allocationIds)]
    .map(allocationId => {
      const found = allocationById(allocationId);
      const transferName = found?.allocation.hubName || found?.allocation.transferLocationName;
      return found && found.allocation.status === "STAGED_IN_HUB" && transferName ? {
        id: `OUT:${allocationId}`,
        allocationId,
        max: found.allocation.qty,
        summary: allocationMoveSummary(found.order, found.allocation, `จาก: ${transferName}<br>ไป: ${found.order.customer}`)
      } : null;
    })
    .filter(Boolean);
  const items = [...sourceItems, ...outboundItems];
  openQuantityMoveModal({
    title: "นำสินค้าขึ้นรถ",
    items,
    onConfirm: qtyById => {
      sourceItems.forEach(item => {
        const qty = qtyById.get(item.id) || 0;
        if (qty > 0) addToTruck(truckId, item.sourceId, qty, { skipRender: true });
      });
      if (outboundItems.length) {
        const outboundQty = new Map(outboundItems.map(item => [item.allocationId, qtyById.get(item.id) || 0]));
        loadHubOutboundQuantitiesToTruck(outboundItems.map(item => item.allocationId), truckId, outboundQty, { skipRender: true });
      }
      selectedSourceItems.clear();
      clearHubOutboundSelection();
      render();
    }
  });
}

function loadHubOutboundToTruck(allocationIds, targetTruckId) {
  const truck = truckById(targetTruckId);
  const ids = [...new Set((Array.isArray(allocationIds) ? allocationIds : [allocationIds]).filter(Boolean))];
  if (!truck || !ids.length) return false;

  ids.forEach(allocationId => {
    const found = allocationById(allocationId);
    const transferName = found?.allocation.hubName || found?.allocation.transferLocationName;
    if (!found || found.allocation.status !== "STAGED_IN_HUB" || !transferName) return;
    found.allocation.status = "MOVED_FROM_HUB";
    const qty = found.allocation.qty;
    if (!truck.itemIds.includes(found.order.id)) truck.itemIds.push(found.order.id);
    ensureOriginSequence(truck, transferName);
    syncTruckOrigins(truck);

    const outboundAllocation = {
      id: `A-${state.nextAllocation++}`,
      truckId: truck.id,
      destination: found.order.customer,
      status: "ASSIGNED",
      qty,
      autoRoute: true,
      sourceTransferType: found.allocation.hubId ? "HUB" : found.allocation.transferLocationType,
      sourceTransferName: transferName,
      sourceHubId: found.allocation.hubId || null,
      sourceHubName: found.allocation.hubName || null,
      timestamp: Date.now()
    };
    found.order.allocations.push(outboundAllocation);
    ensureHubOutboundRouteStops(truck, outboundAllocation, found.order, transferName);
  });

  clearHubOutboundSelection();
  render();
  return true;
}

function loadHubOutboundQuantitiesToTruck(allocationIds, targetTruckId, qtyById, options = {}) {
  const truck = truckById(targetTruckId);
  const ids = [...new Set((Array.isArray(allocationIds) ? allocationIds : [allocationIds]).filter(Boolean))];
  if (!truck || !ids.length) return false;

  ids.forEach(allocationId => {
    const found = allocationById(allocationId);
    const transferName = found?.allocation.hubName || found?.allocation.transferLocationName;
    const qty = Math.min(qtyById.get(allocationId) || 0, found?.allocation.qty || 0);
    if (!found || found.allocation.status !== "STAGED_IN_HUB" || !transferName || qty <= 0) return;
    const isFullMove = qty >= found.allocation.qty;

    if (isFullMove) {
      found.allocation.status = "MOVED_FROM_HUB";
    } else {
      found.allocation.qty -= qty;
    }

    if (!truck.itemIds.includes(found.order.id)) truck.itemIds.push(found.order.id);
    ensureOriginSequence(truck, transferName);
    syncTruckOrigins(truck);

    const outboundAllocation = {
      id: `A-${state.nextAllocation++}`,
      truckId: truck.id,
      destination: found.order.customer,
      status: "ASSIGNED",
      qty,
      autoRoute: true,
      sourceTransferType: found.allocation.hubId ? "HUB" : found.allocation.transferLocationType,
      sourceTransferName: transferName,
      sourceHubId: found.allocation.hubId || null,
      sourceHubName: found.allocation.hubName || null,
      timestamp: Date.now()
    };
    found.order.allocations.push(outboundAllocation);
    ensureHubOutboundRouteStops(truck, outboundAllocation, found.order, transferName);
  });

  clearHubOutboundSelection();
  if (!options.skipRender) render();
  return true;
}

function openHubOutboundQuantityModal(allocationIds, targetTruckId) {
  const items = [...new Set(allocationIds)]
    .map(allocationId => {
      const found = allocationById(allocationId);
      const transferName = found?.allocation.hubName || found?.allocation.transferLocationName;
      return found && found.allocation.status === "STAGED_IN_HUB" && transferName ? {
        id: allocationId,
        max: found.allocation.qty,
        summary: allocationMoveSummary(found.order, found.allocation, `จาก: ${transferName}<br>ไป: ${found.order.customer}`)
      } : null;
    })
    .filter(Boolean);
  openQuantityMoveModal({
    title: "นำสินค้า outbound ขึ้นรถ",
    items,
    onConfirm: qtyById => loadHubOutboundQuantitiesToTruck(items.map(item => item.id), targetTruckId, qtyById)
  });
}

function truckSelectionKey(truckId, orderId) {
  return `${truckId}:${orderId}`;
}

function selectedOrderIdsForTruck(truckId, fallbackOrderId = null) {
  const ids = [...selectedTruckItems]
    .map(key => key.split(":"))
    .filter(([selectedTruckId]) => selectedTruckId === truckId)
    .map(([, orderId]) => orderId);
  return ids.length ? ids : (fallbackOrderId ? [fallbackOrderId] : []);
}

function clearTruckSelection(truckId = null) {
  if (!truckId) {
    selectedTruckItems.clear();
    selectedTruckItem = null;
    return;
  }
  selectedTruckItems = new Set([...selectedTruckItems].filter(key => !key.startsWith(`${truckId}:`)));
  if (selectedTruckItem?.truckId === truckId) selectedTruckItem = null;
}

function allocationSelectionIds(fallbackId = null) {
  return selectedAllocationItems.size ? [...selectedAllocationItems] : (fallbackId ? [fallbackId] : []);
}

function allocationSelectionIdsForDestination(destination, fallbackId = null) {
  const ids = [...selectedAllocationItems].filter(allocationId => {
    const found = findAllocation(allocationId);
    return found?.allocation.destination === destination && found.allocation.status === "STAGED_IN_HUB";
  });
  return ids.length ? ids : (fallbackId ? [fallbackId] : []);
}

function clearAllocationSelection() {
  selectedAllocationItems.clear();
}

function loadManyFromHubToTruck(allocationIds, targetTruckId = null) {
  const ids = [...new Set(allocationIds)];
  ids.forEach(allocationId => loadFromHubToTruck(allocationId, targetTruckId, { skipRender: true }));
  clearAllocationSelection();
  render();
}

function allocateManyToDestination(truckId, destination, orderIds) {
  const validIds = [...new Set(orderIds)].filter(orderId => {
    const order = orderById(orderId);
    return order && qtyInTruck(order, truckId) > 0 && (isHubDestination(destination) || order.customer === destination);
  });

  if (!validIds.length) {
    alert("ไม่มีสินค้าที่ตรงกับปลายทางนี้");
    return;
  }

  validIds.forEach(orderId => {
    const order = orderById(orderId);
    allocatePartial(truckId, destination, orderId, qtyInTruck(order, truckId), { skipRender: true });
  });
  clearTruckSelection(truckId);
  render();
}

function openTruckLoadModal(truckId, orderId) {
  const order = orderById(orderId);
  const max = unassignedQty(order);
  closeQuantityModal();
  activeTruckLoad = { truckId, orderId };
  activeAllocation = null;
  els.modalTitle.textContent = "นำสินค้าขึ้นรถ";
  els.modalOrderSummary.innerHTML = `
    <strong>${order.product}</strong><br>
    ${order.code}<br>
    ลูกค้า: ${order.customer}<br>
    ต้นทาง: ${order.origin}
  `;
  els.modalQty.max = max;
  els.modalQty.value = max;
  els.modalHelper.textContent = `เลือกได้สูงสุด ${max.toLocaleString()} แพ็ก ค่าเริ่มต้นคือจำนวนทั้งหมดที่ยังไม่จัดสรร`;
  els.dialog.showModal();
}

function loadFromHubToTruck(allocationId, targetTruckId = null, options = {}) {
  const found = findAllocation(allocationId);
  if (!found || found.allocation.status !== "STAGED_IN_HUB") return;

  const hubTrucks = state.trucks.filter(item =>
    item.sourceType === "HUB" &&
    item.parentTruckId === found.allocation.truckId &&
    item.parentHubDestination === found.allocation.destination
  );
  let truck = targetTruckId
    ? truckById(targetTruckId)
    : (hubTrucks.find(item => truckOpenItems(item).length === 0) || hubTrucks.at(-1));
  if (!truck) {
    truck = createTruck("Dummy", "HUB", {
      sourceType: "HUB",
      sourceLabel: "HUB",
      parentTruckId: found.allocation.truckId,
      parentHubDestination: found.allocation.destination
    });
    state.nextTruck += 1;
    state.trucks.push(truck);
  }

  found.allocation.status = "MOVED_FROM_HUB";
  if (!truck.itemIds.includes(found.order.id)) truck.itemIds.push(found.order.id);
  ensureOriginSequence(truck, found.order.origin);
  syncTruckOrigins(truck);
  found.order.allocations.push({
    id: `A-${state.nextAllocation++}`,
    truckId: truck.id,
    destination: "TRUCK",
    status: "IN_TRUCK",
    qty: found.allocation.qty,
    timestamp: Date.now()
  });

  selectedAllocationItems.delete(allocationId);
  if (!options.skipRender) render();
}

function addTruckFromHub(parentTruckId, parentHubDestination) {
  const truck = createTruck("Dummy", "HUB", {
    sourceType: "HUB",
    sourceLabel: "HUB",
    parentTruckId,
    parentHubDestination
  });
  state.nextTruck += 1;
  state.trucks.push(truck);
  render();
}

function addOriginTruck() {
  const truck = createTruck("Dummy", "");
  state.nextTruck += 1;
  state.trucks.push(truck);
  render();
}

function deleteTruck(truckId) {
  const truck = truckById(truckId);
  if (!truck) return;

  const hasData = truck.itemIds.length > 0 ||
    truck.destinations.length > 0 ||
    allocationsForTruck(truckId).length > 0 ||
    state.trucks.some(item => item.parentTruckId === truckId);

  if (hasData && !confirm("รถคันนี้มีข้อมูลอยู่ ต้องการลบรถคันนี้หรือไม่?")) return;

  state.orders.forEach(order => {
    order.allocations = order.allocations.filter(allocation => allocation.truckId !== truckId);
  });
  state.trucks = state.trucks
    .filter(item => item.id !== truckId)
    .map(item => item.parentTruckId === truckId ? { ...item, parentTruckId: null, parentHubDestination: null } : item);
  if (selectedTruckItem?.truckId === truckId) selectedTruckItem = null;
  clearTruckSelection(truckId);
  clearAllocationSelection();
  render();
}

function allocatePartial(truckId, destination, orderId, qty, options = {}) {
  const order = orderById(orderId);
  const truckQty = qtyInTruck(order, truckId);

  if (qty > truckQty) throw new Error("จำนวนเกินของที่เหลือในรถ");
  if (qty <= 0) throw new Error("จำนวนต้องมากกว่า 0");

  let remaining = qty;
  for (const allocation of order.allocations) {
    if (allocation.truckId !== truckId || allocation.destination !== "TRUCK") continue;
    const moveQty = Math.min(allocation.qty, remaining);
    allocation.qty -= moveQty;
    remaining -= moveQty;
    if (remaining === 0) break;
  }

  order.allocations = order.allocations.filter(allocation => allocation.qty > 0);
  if (qtyInTruck(order, truckId) === 0) {
    const truck = truckById(truckId);
    syncTruckOrigins(truck);
  }

  order.allocations.push({
    id: `A-${state.nextAllocation++}`,
    truckId,
    destination,
    status: isHubDestination(destination) ? "STAGED_IN_HUB" : "ASSIGNED",
    qty,
    timestamp: Date.now()
  });

  selectedTruckItem = null;
  selectedTruckItems.delete(truckSelectionKey(truckId, orderId));
  if (!options.skipRender) render();
}

function undoAllocation(allocationId) {
  const found = findAllocation(allocationId);
  if (!found) return;
  const { order, allocation } = found;

  order.allocations = order.allocations.filter(item => item.id !== allocationId);
  const truck = truckById(allocation.truckId);
  if (allocation.autoRoute) {
    if (truck) {
      removeAllocationFromStops(truck, allocation.id);
      const hasMoreOrderPlan = order.allocations.some(item => item.truckId === truck.id);
      const hasMoreDestinationPlan = state.orders.some(item =>
        item.allocations.some(plan =>
          plan.truckId === truck.id &&
          plan.destination === allocation.destination &&
          plan.status !== "MOVED_FROM_HUB"
        )
      );
      if (!hasMoreOrderPlan) truck.itemIds = truck.itemIds.filter(id => id !== order.id);
      if (!hasMoreDestinationPlan) {
        truck.destinations = truck.destinations.filter(destination => destination !== allocation.destination);
      }
      if (!truckHasPlanForOrigin(truck, order.origin)) {
        truck.originSequence = (truck.originSequence || []).filter(origin => origin !== order.origin);
      }
      syncTruckOrigins(truck);
    }
    render();
    return;
  }

  if (truck) {
    if (!truck.itemIds.includes(order.id)) truck.itemIds.push(order.id);
    ensureOriginSequence(truck, order.origin);
    syncTruckOrigins(truck);
  }

  order.allocations.push({
    id: `A-${state.nextAllocation++}`,
    truckId: allocation.truckId,
    destination: "TRUCK",
    status: "IN_TRUCK",
    qty: allocation.qty,
    timestamp: Date.now()
  });
  render();
}

function undoTruckLoad(truckId, orderId) {
  const truck = truckById(truckId);
  const order = orderById(orderId);
  if (!truck || !order) return;

  const returnedQty = qtyInTruck(order, truckId);
  if (returnedQty <= 0) return;

  order.allocations = order.allocations.filter(allocation => {
    return !(allocation.truckId === truckId && allocation.destination === "TRUCK");
  });

  const hasOtherTruckPlan = order.allocations.some(allocation => allocation.truckId === truckId);
  if (!hasOtherTruckPlan) {
    truck.itemIds = truck.itemIds.filter(id => id !== orderId);
  }
  if (!truckHasPlanForOrigin(truck, order.origin)) {
    truck.originSequence = (truck.originSequence || []).filter(origin => origin !== order.origin);
  }
  syncTruckOrigins(truck);
  selectedTruckItem = null;
  selectedTruckItems.clear();
  render();
}

function findAllocation(allocationId) {
  for (const order of state.orders) {
    const allocation = order.allocations.find(item => item.id === allocationId);
    if (allocation) return { order, allocation };
  }
  return null;
}

function availableSourceIds(orders) {
  return orders.filter(order => unassignedQty(order) > 0).map(order => order.id);
}

function setSourceSelection(orderIds, selected) {
  if (selected) clearActionSelections("location-source");
  orderIds.forEach(orderId => {
    if (selected) selectedSourceItems.add(orderId);
    else selectedSourceItems.delete(orderId);
  });
  render();
}

function selectionState(orderIds) {
  const ids = orderIds.filter(orderId => unassignedQty(orderById(orderId)) > 0);
  const selectedCount = ids.filter(orderId => selectedSourceItems.has(orderId)).length;
  return {
    checked: ids.length > 0 && selectedCount === ids.length,
    indeterminate: selectedCount > 0 && selectedCount < ids.length,
    disabled: ids.length === 0
  };
}

function sourceHeader(label, orderIds, className = "") {
  const header = document.createElement("label");
  header.className = `source-select ${className}`.trim();
  header.innerHTML = `
    <input type="checkbox">
    <span>${label}</span>
  `;
  const checkbox = header.querySelector("input");
  const state = selectionState(orderIds);
  checkbox.checked = state.checked;
  checkbox.indeterminate = state.indeterminate;
  checkbox.disabled = state.disabled;
  checkbox.addEventListener("change", event => {
    setSourceSelection(orderIds, event.target.checked);
  });
  return header;
}

function routeSelectionStore(context) {
  if (context === "route-pickup") return selectedRoutePickups;
  if (context === "route-drop") return selectedRouteDrops;
  if (context === "location-outbound") return selectedHubOutboundItems;
  if (context === "hub-outbound") return selectedHubOutboundItems;
  return null;
}

function routeSelectionKeyFor(allocation, context, stopId = null) {
  if (context === "route-pickup") return routePickupKey(allocation.id, stopId);
  if (context === "route-drop") return routeDropKey(allocation.id, stopId);
  return allocation.id;
}

function routeCustomerHeader(label, allocations, context, stopId = null) {
  const header = document.createElement("label");
  header.className = "source-select customer-select route-customer-select";
  header.innerHTML = `
    <input type="checkbox">
    <span>${label}</span>
  `;
  const checkbox = header.querySelector("input");
  const selectable = context === "route-pickup" || context === "route-drop"
    ? allocations
    : allocations.filter(allocation => allocation.status !== "MOVED_FROM_HUB");
  const store = routeSelectionStore(context);
  const keys = selectable.map(allocation => routeSelectionKeyFor(allocation, context, stopId));
  const selectedCount = store ? keys.filter(key => store.has(key)).length : 0;
  checkbox.checked = keys.length > 0 && selectedCount === keys.length;
  checkbox.indeterminate = selectedCount > 0 && selectedCount < keys.length;
  checkbox.disabled = !store || keys.length === 0;
  checkbox.addEventListener("change", event => {
    if (!store) return;
    if (event.target.checked) clearActionSelections(context === "location-outbound" ? "location-source" : context);
    keys.forEach(key => {
      if (event.target.checked) store.add(key);
      else store.delete(key);
    });
    render();
  });
  return header;
}

function truckCustomerHeader(truck, label, orders) {
  const header = document.createElement("label");
  header.className = "source-select customer-select route-customer-select truck-customer-select";
  header.innerHTML = `
    <input type="checkbox">
    <span>${label}</span>
  `;
  const selectable = orders.filter(order => qtyInTruck(order, truck.id) > 0);
  const keys = selectable.map(order => truckSelectionKey(truck.id, order.id));
  const checkbox = header.querySelector("input");
  const selectedCount = keys.filter(key => selectedTruckItems.has(key)).length;
  checkbox.checked = keys.length > 0 && selectedCount === keys.length;
  checkbox.indeterminate = selectedCount > 0 && selectedCount < keys.length;
  checkbox.disabled = keys.length === 0;
  checkbox.addEventListener("change", event => {
    if (event.target.checked) clearActionSelections("truck");
    keys.forEach(key => {
      if (event.target.checked) selectedTruckItems.add(key);
      else selectedTruckItems.delete(key);
    });
    selectedTruckItem = selectedTruckItems.size === 1
      ? (() => {
          const [truckId, orderId] = [...selectedTruckItems][0].split(":");
          return { truckId, orderId };
        })()
      : null;
    render();
  });
  return header;
}

function selectedTOGroups() {
  return Object.entries(groupBy(state.orders, "code")).map(([code, orders]) => ({
    code,
    orders,
    totalQty: orders.reduce((sum, order) => sum + order.totalQty, 0),
    remainingQty: orders.reduce((sum, order) => sum + Math.max(unassignedQty(order), 0), 0)
  }));
}

function selectedTOCodes() {
  return new Set(state.orders.map(order => order.code));
}

function availableTOPool() {
  const selectedCodes = selectedTOCodes();
  return availableTOCatalog.filter(item => !selectedCodes.has(item.code));
}

function filteredTOPool() {
  const keyword = toPickerSearchText.trim().toLowerCase();
  return availableTOPool().filter(item => {
    if (!keyword) return true;
    const lineKeywords = item.lines.flatMap(line => [line.product, line.customer, line.origin, line.sku]);
    return [item.code, item.tr, item.ref, item.priority, item.type, ...lineKeywords]
      .some(value => String(value).toLowerCase().includes(keyword));
  });
}

function toTotalQty(item) {
  return item.lines.reduce((sum, line) => sum + line.qty, 0);
}

function toTotalWeight(item) {
  return item.lines.reduce((sum, line) => sum + line.qty * line.weightPerPack, 0);
}

function openTOSelector() {
  draftTOSelection.clear();
  expandedTOSelection.clear();
  toPickerSearchText = "";
  if (els.toPickerSearch) els.toPickerSearch.value = "";
  renderTOSelector();
  els.toPickerDialog?.showModal();
}

function addSelectedTOs() {
  const selectedItems = availableTOCatalog.filter(item => draftTOSelection.has(item.code));
  selectedItems.forEach(item => {
    item.lines.forEach(line => {
      const orderNumber = String(state.nextOrder).padStart(3, "0");
      state.orders.push({
        id: `TO-${orderNumber}`,
        code: item.code,
        product: line.product,
        customer: line.customer,
        origin: line.origin,
        totalQty: line.qty,
        weightPerPack: line.weightPerPack,
        allocations: []
      });
      state.nextOrder += 1;
    });
  });
  draftTOSelection.clear();
  expandedTOSelection.clear();
  els.toPickerDialog?.close();
  render();
}

function createMockMultiOriginTO() {
  const index = mockTOCounter++;
  const code = `TO-MOCK-MULTI-${String(index).padStart(2, "0")}`;
  const originInput = prompt(
    "ระบุชื่อต้นทางที่ต้องการสร้าง mock โดยคั่นด้วยเครื่องหมาย ,",
    "โรงงาน ปทุมธานี, โรงงาน อยุธยา, โรงงาน สมุทรปราการ"
  );
  if (originInput === null) return;
  const origins = originInput
    .split(",")
    .map(origin => origin.trim())
    .filter(Boolean);
  if (!origins.length) {
    alert("กรุณาระบุชื่อต้นทางอย่างน้อย 1 แห่ง");
    return;
  }
  const products = ["คริสตัล", "ช้างโคลด์บรูว", "คาร์เนชั่น", "เอส", "แรงเงอร์"];
  availableTOCatalog.unshift({
    code,
    tr: `OC-MOCK-${String(5300 + index)}`,
    ref: `PMOCK${String(index).padStart(4, "0")}`,
    priority: index % 2 ? "ปกติ" : "ด่วน",
    type: "Multi-Origin",
    shipDate: "28/04/2026",
    requestDate: "30/04/2026",
    lines: origins.map((origin, originIndex) => ({
      sku: `MOCK-${index}-${String(originIndex + 1).padStart(2, "0")}`,
      product: products[originIndex % products.length],
      customer: "ลูกค้า Mock",
      origin,
      qty: 500 + index * 50 + originIndex * 150,
      unit: "แพ็ก",
      weightPerPack: 1.0
    }))
  });
  draftTOSelection.add(code);
  expandedTOSelection.add(code);
  toPickerSearchText = "";
  if (els.toPickerSearch) els.toPickerSearch.value = "";
  renderTOSelector();
}

function removePlanningTO(code) {
  const orders = state.orders.filter(order => order.code === code);
  if (!orders.length) return;

  const hasPlanData = orders.some(order => order.allocations.length > 0);
  if (hasPlanData && !confirm("T/O นี้ถูกนำไปจัดแผนแล้ว ต้องการลบ T/O และข้อมูลที่จัดไว้หรือไม่?")) return;

  const removedIds = new Set(orders.map(order => order.id));
  state.orders = state.orders.filter(order => order.code !== code);
  state.trucks.forEach(truck => {
    truck.itemIds = truck.itemIds.filter(orderId => !removedIds.has(orderId));
    truck.destinations = truck.destinations.filter(destination => {
      if (isHubDestination(destination)) return true;
      return truck.itemIds.some(orderId => orderById(orderId)?.customer === destination) ||
        state.orders.some(order => order.allocations.some(allocation => allocation.truckId === truck.id && allocation.destination === destination));
    });
    syncTruckOrigins(truck);
  });
  selectedSourceItems = new Set([...selectedSourceItems].filter(orderId => !removedIds.has(orderId)));
  selectedTruckItems = new Set([...selectedTruckItems].filter(key => !removedIds.has(key.split(":")[1])));
  if (selectedTruckItem && removedIds.has(selectedTruckItem.orderId)) selectedTruckItem = null;
  render();
}

function renderTOSelector() {
  if (!els.toPickerList) return;
  const items = filteredTOPool();
  els.toPickerList.innerHTML = `
    <div class="to-picker-row to-picker-row-head">
      <span></span>
      <span></span>
      <b>ความสำคัญ</b>
      <b>เลขที่ T/O</b>
      <b>เลขที่ TR</b>
      <b>หมายเลขอ้างอิง</b>
      <b>ประเภท</b>
      <b>วันที่ต้องการให้ขน</b>
      <b>วันที่ลูกค้าต้องการจาก</b>
    </div>
  `;
  items.forEach(item => {
    const row = document.createElement("div");
    row.className = "to-picker-row";
    if (draftTOSelection.has(item.code)) row.classList.add("is-selected");
    row.innerHTML = `
      <label class="check-cell">
        <input type="checkbox" ${draftTOSelection.has(item.code) ? "checked" : ""}>
      </label>
      <button type="button" class="expand-button" aria-label="ดูรายการสินค้า">${expandedTOSelection.has(item.code) ? "⌄" : "›"}</button>
      <strong>${item.priority}</strong>
      <span>${item.code}</span>
      <span>${item.tr}</span>
      <span>${item.ref}</span>
      <span>${item.type}</span>
      <span>${item.shipDate}</span>
      <span>${item.requestDate}</span>
    `;
    row.querySelector("input").addEventListener("change", event => {
      if (event.target.checked) draftTOSelection.add(item.code);
      else draftTOSelection.delete(item.code);
      renderTOSelector();
    });
    row.querySelector(".expand-button").addEventListener("click", () => {
      if (expandedTOSelection.has(item.code)) expandedTOSelection.delete(item.code);
      else expandedTOSelection.add(item.code);
      renderTOSelector();
    });
    els.toPickerList.append(row);

    if (expandedTOSelection.has(item.code)) {
      const detail = document.createElement("div");
      detail.className = "to-picker-detail";
      const originCount = new Set(item.lines.map(line => line.origin)).size;
      detail.innerHTML = `
        <div class="to-picker-detail-summary">${originCount.toLocaleString()} ต้นทางในใบ T/O นี้</div>
        <div class="to-picker-detail-head">
          <b>รหัสสินค้า</b>
          <b>ชื่อสินค้า</b>
          <b>ลูกค้า</b>
          <b>ต้นทาง</b>
          <b>จำนวน</b>
          <b>น้ำหนัก (กิโลกรัม)</b>
        </div>
        ${item.lines.map(line => `
          <div class="to-picker-detail-row">
            <span>${line.sku}</span>
            <span>${line.product}</span>
            <span>${line.customer}</span>
            <span>${line.origin}</span>
            <span>${line.qty.toLocaleString()} ${line.unit}</span>
            <span>${(line.qty * line.weightPerPack).toLocaleString()}</span>
          </div>
        `).join("")}
      `;
      els.toPickerList.append(detail);
    }
  });
  if (!items.length) {
    const empty = document.createElement("div");
    empty.className = "to-picker-empty";
    empty.textContent = "ไม่พบใบ T/O ที่พร้อมเพิ่ม";
    els.toPickerList.append(empty);
  }
  const selectedItems = availableTOCatalog.filter(item => draftTOSelection.has(item.code));
  const selectedWeight = selectedItems.reduce((sum, item) => sum + toTotalWeight(item), 0);
  els.toPickerCount.textContent = `${selectedItems.length.toLocaleString()} รายการ`;
  els.toPickerWeight.textContent = `${selectedWeight.toLocaleString()} กิโลกรัม`;
  els.confirmTOPickerButton.disabled = selectedItems.length === 0;
}

function render() {
  if (activeRouteOrderId && !orderById(activeRouteOrderId)) activeRouteOrderId = null;
  if (activeHubId && !state.hubs.some(hub => hub.id === activeHubId)) activeHubId = null;
  renderSummary();
  renderSelectedTOs();
  renderOrigins();
  renderHubs();
  renderDeliveryTracking();
  renderTrucks();
  renderZoom();
  requestAnimationFrame(drawConnectors);
}

function renderSummary() {
  const total = state.orders.reduce((sum, order) => sum + order.totalQty, 0);
  const assigned = state.orders.flatMap(order => order.allocations)
    .filter(allocation => allocation.status === "ASSIGNED")
    .reduce((sum, allocation) => sum + allocation.qty, 0);
  const staged = state.orders.flatMap(order => order.allocations)
    .filter(allocation => allocation.status === "STAGED_IN_HUB")
    .reduce((sum, allocation) => sum + allocation.qty, 0);
  const inTruck = state.orders.flatMap(order => order.allocations)
    .filter(allocation => allocation.status === "IN_TRUCK")
    .reduce((sum, allocation) => sum + allocation.qty, 0);

  els.summaryStrip.innerHTML = [
    ["T/O ทั้งหมด", `${total.toLocaleString()} แพ็ก`],
    ["ในรถ", `${inTruck.toLocaleString()} แพ็ก`],
    ["พักที่ HUB", `${staged.toLocaleString()} แพ็ก`],
    ["ส่งปลายทาง", `${assigned.toLocaleString()} แพ็ก`]
  ].map(([label, value]) => `<div class="metric"><span>${label}</span><b>${value}</b></div>`).join("");
}

function renderSelectedTOs() {
  if (!els.selectedTOList) return;
  const groups = selectedTOGroups();
  els.selectedTOList.closest(".to-selection-panel")?.classList.toggle("is-collapsed", selectedTOCollapsed);
  if (els.toggleTOPanelButton) els.toggleTOPanelButton.textContent = selectedTOCollapsed ? "ขยาย" : "ย่อ";
  els.selectedTOList.innerHTML = groups.map(group => `
    <article class="selected-to-card">
      <div>
        <strong>${group.code}</strong>
        <span>${group.orders.length.toLocaleString()} รายการสินค้า</span>
      </div>
      <b>${group.remainingQty.toLocaleString()}/${group.totalQty.toLocaleString()} แพ็ก</b>
      <button type="button" data-code="${group.code}" aria-label="ลบ T/O">×</button>
    </article>
  `).join("");
  els.selectedTOList.querySelectorAll("button[data-code]").forEach(button => {
    button.addEventListener("click", () => removePlanningTO(button.dataset.code));
  });
}

function renderOrigins() {
  selectedSourceItems = new Set([...selectedSourceItems].filter(orderId => {
    const order = orderById(orderId);
    return order && unassignedQty(order) > 0;
  }));
  const grouped = groupBy(state.orders, "origin");
  const originEntries = Object.entries(grouped);
  if (!originEntries.some(([origin]) => origin === activeOriginLocation)) activeOriginLocation = null;
  els.originList.innerHTML = "";
  originEntries.forEach(([origin, orders]) => {
    const availableIds = availableSourceIds(orders);
    const totalQty = orders.reduce((sum, order) => sum + order.totalQty, 0);
    const remainingQty = orders.reduce((sum, order) => sum + Math.max(unassignedQty(order), 0), 0);
    const pendingTransfer = originPendingTransferAllocations(origin);
    const tab = document.createElement("button");
    tab.type = "button";
    tab.className = "origin-tab";
    if (!activeHubId && origin === activeOriginLocation) tab.classList.add("is-active");
    if (!availableIds.length) tab.classList.add("is-empty");
    if (pendingTransfer.length) tab.classList.add("has-transfer-pending");
    else if (!availableIds.length && originTransferAllocations(origin).length) tab.classList.add("is-complete");
    tab.innerHTML = `
      <strong>${origin}</strong>
      <span>${pendingTransfer.length ? `รอส่ง ${pendingTransfer.length.toLocaleString()} items >` : `${remainingQty.toLocaleString()}/${totalQty.toLocaleString()} แพ็ก`}</span>
    `;
    addOriginTransferDropHandlers(tab, origin);
    tab.addEventListener("click", () => {
      if (!activeHubId && activeOriginLocation === origin) {
        activeOriginLocation = null;
      } else {
        activeOriginLocation = origin;
        activeHubId = null;
      }
      render();
    });
    els.originList.append(tab);
  });

  if (!activeHubId) renderOriginDetail(activeOriginLocation ? (grouped[activeOriginLocation] || []) : []);
}

function openHubSelector() {
  hubPickerSearchText = "";
  if (els.hubPickerSearch) els.hubPickerSearch.value = "";
  renderHubSelector();
  els.hubPickerDialog?.showModal();
}

function availableHubs() {
  const existing = new Set(state.hubs.map(hub => hub.name));
  const keyword = hubPickerSearchText.trim().toLowerCase();
  return hubCatalog
    .filter(name => !existing.has(name))
    .filter(name => !keyword || name.toLowerCase().includes(keyword));
}

function renderHubSelector() {
  if (!els.hubPickerList) return;
  const hubs = availableHubs();
  els.hubPickerList.innerHTML = "";
  hubs.forEach(name => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "hub-picker-option";
    button.innerHTML = `
      <strong>${name}</strong>
      <span>พร้อมเพิ่มเป็นจุด Transfer</span>
    `;
    button.addEventListener("click", () => addHub(name));
    els.hubPickerList.append(button);
  });
  if (!hubs.length) {
    const empty = document.createElement("div");
    empty.className = "to-picker-empty";
    empty.textContent = "ไม่พบ HUB ที่พร้อมเพิ่ม";
    els.hubPickerList.append(empty);
  }
  if (els.hubPickerCount) els.hubPickerCount.textContent = `${hubs.length.toLocaleString()} รายการ`;
}

function addHub(name) {
  if (!name || state.hubs.some(hub => hub.name === name)) {
    alert("ไม่พบ HUB ที่เลือก หรือ HUB นี้ถูกเพิ่มแล้ว");
    return;
  }
  const hub = { id: `HUB-${state.nextHub++}`, name };
  state.hubs.push(hub);
  activeHubId = hub.id;
  activeOriginLocation = null;
  els.hubPickerDialog?.close();
  render();
}

function hubInboundAllocations(hubId) {
  return state.orders.flatMap(order =>
    order.allocations
      .filter(allocation => allocation.hubId === hubId && ["STAGED_IN_HUB", "MOVED_FROM_HUB"].includes(allocation.status))
      .map(allocation => ({ ...allocation, order }))
  );
}

function hubPendingAllocations(hubId) {
  return hubInboundAllocations(hubId).filter(allocation => allocation.status === "STAGED_IN_HUB");
}

function originTransferAllocations(origin) {
  return state.orders.flatMap(order =>
    order.allocations
      .filter(allocation =>
        allocation.transferLocationType === "ORIGIN" &&
        allocation.transferLocationName === origin &&
        ["STAGED_IN_HUB", "MOVED_FROM_HUB"].includes(allocation.status)
      )
      .map(allocation => ({ ...allocation, order }))
  );
}

function originPendingTransferAllocations(origin) {
  return originTransferAllocations(origin).filter(allocation => allocation.status === "STAGED_IN_HUB");
}

function renderHubs() {
  if (!els.hubList) return;
  els.hubList.innerHTML = "";
  state.hubs.forEach(hub => {
    const inbound = hubInboundAllocations(hub.id);
    const pending = hubPendingAllocations(hub.id);
    const tab = document.createElement("button");
    tab.type = "button";
    tab.className = "hub-tab";
    if (hub.id === activeHubId) tab.classList.add("is-active");
    if (pending.length) tab.classList.add("has-inbound");
    else if (inbound.length) tab.classList.add("is-complete");
    tab.innerHTML = `
      <strong>${hub.name}</strong>
      <span>${pending.length ? "รอส่ง" : "รอรับ"} ${pending.length.toLocaleString()} items &gt;</span>
    `;
    addHubDropHandlers(tab, hub.id);
    tab.addEventListener("click", () => {
      if (activeHubId === hub.id) {
        activeHubId = null;
      } else {
        activeHubId = hub.id;
        activeOriginLocation = null;
      }
      render();
    });
    els.hubList.append(tab);
  });
  const activeHub = state.hubs.find(hub => hub.id === activeHubId);
  if (activeHub) renderHubDetail(activeHub);
}

function renderHubDetail(hub) {
  if (!els.originDetail) return;
  const sourcePanel = els.originDetail.closest(".source-panel");
  const board = sourcePanel?.closest(".board");
  board?.classList.remove("is-source-detail-collapsed");
  sourcePanel?.classList.remove("is-detail-collapsed");
  els.originDetail.classList.remove("is-collapsed");
  const inbound = hubInboundAllocations(hub.id);
  const pending = inbound.filter(allocation => allocation.status === "STAGED_IN_HUB");
  els.originDetail.innerHTML = `
    <div class="origin-detail-head">
      <p class="eyebrow">Transfer</p>
      <h3>${hub.name}</h3>
    </div>
    <div class="hub-transfer-zone">
      <span>${inbound.length ? "OUTBOUND" : "ลากสินค้าที่ต้องการกระจายวางที่นี่"}</span>
      <div class="hub-transfer-stack"></div>
    </div>
  `;
  const zone = els.originDetail.querySelector(".hub-transfer-zone");
  addHubDropHandlers(zone, hub.id);
  addHubDropHandlers(els.originDetail, hub.id);
  const stack = els.originDetail.querySelector(".hub-transfer-stack");
  const groups = groupAllocationsByCustomer(inbound);
  Object.entries(groups).forEach(([customer, allocations]) => {
    stack.append(routeCustomerHeader(customer, allocations, "hub-outbound"));
    allocations.forEach(allocation => stack.append(allocationLine(allocation, {
      readonly: true,
      hubOutbound: allocation.status === "STAGED_IN_HUB",
      returnTransfer: allocation.status === "STAGED_IN_HUB",
      muted: allocation.status === "MOVED_FROM_HUB"
    })));
  });
}

function deliveryTrackingGroups() {
  const groups = new Map();
  state.orders.forEach(order => {
    order.allocations.forEach(allocation => {
      if (allocation.status === "MOVED_FROM_HUB") return;
      if (!["ASSIGNED", "STAGED_IN_HUB"].includes(allocation.status)) return;
      const customer = order.customer;
      if (!groups.has(customer)) groups.set(customer, { customer, planned: 0, delivered: 0, pendingHub: 0 });
      const group = groups.get(customer);
      group.planned += 1;
      if (allocation.status === "ASSIGNED" && allocation.destination === customer) group.delivered += 1;
      if (allocation.status === "STAGED_IN_HUB") group.pendingHub += 1;
    });
  });
  return [...groups.values()];
}

function renderDeliveryTracking() {
  if (!els.deliveryList) return;
  const groups = deliveryTrackingGroups();
  els.deliveryList.innerHTML = "";
  groups.forEach(group => {
    const tab = document.createElement("article");
    tab.className = "delivery-tab";
    tab.classList.add(group.delivered >= group.planned ? "is-complete" : "is-pending");
    tab.innerHTML = `
      <strong>${group.customer}</strong>
      <span>${group.delivered >= group.planned ? "ส่งแล้ว" : "รอส่ง"} ${group.delivered.toLocaleString()}/${group.planned.toLocaleString()} items &gt;</span>
    `;
    els.deliveryList.append(tab);
  });
  if (!groups.length) {
    const empty = document.createElement("div");
    empty.className = "delivery-empty";
    empty.textContent = "ยังไม่มีสถานที่จัดส่ง";
    els.deliveryList.append(empty);
  }
}

function renderOriginDetail(orders) {
  if (!els.originDetail) return;
  const sourcePanel = els.originDetail.closest(".source-panel");
  const board = sourcePanel?.closest(".board");
  const activeHub = state.hubs.find(hub => hub.id === activeHubId);
  if (activeHub) {
    board?.classList.remove("is-source-detail-collapsed");
    sourcePanel?.classList.remove("is-detail-collapsed");
    els.originDetail.classList.remove("is-collapsed");
    renderHubDetail(activeHub);
    return;
  }
  els.originDetail.innerHTML = "";
  if (!activeOriginLocation || !orders.length) {
    board?.classList.add("is-source-detail-collapsed");
    sourcePanel?.classList.add("is-detail-collapsed");
    els.originDetail.classList.add("is-collapsed");
    return;
  }
  board?.classList.remove("is-source-detail-collapsed");
  sourcePanel?.classList.remove("is-detail-collapsed");
  els.originDetail.classList.remove("is-collapsed");

  const availableIds = availableSourceIds(orders);
  const header = document.createElement("div");
  header.className = "origin-detail-head";
  header.innerHTML = `
    <p class="eyebrow">ต้นทาง</p>
    <h3>${activeOriginLocation}</h3>
  `;
  header.append(sourceHeader("PICK", availableIds, "origin-pick-select"));
  els.originDetail.append(header);

  const stack = document.createElement("div");
  stack.className = "origin-detail-stack";
  const customerGroups = groupBy(orders, "customer");
  Object.entries(customerGroups).forEach(([customer, customerOrders]) => {
    const customerSection = document.createElement("section");
    customerSection.className = "customer-subtab";
    customerSection.append(sourceHeader(customer, availableSourceIds(customerOrders), "customer-select"));
    const customerStack = document.createElement("div");
    customerStack.className = "to-stack";
    customerOrders.forEach(order => customerStack.append(toCard(order, unassignedQty(order), {
      muted: unassignedQty(order) === 0,
      hideCustomer: true,
      sourceSelectable: true
    })));
    customerSection.append(customerStack);
    stack.append(customerSection);
  });
  const transferAllocations = originTransferAllocations(activeOriginLocation);
  if (transferAllocations.length) {
    const outboundSection = document.createElement("section");
    outboundSection.className = "customer-subtab origin-outbound-section";
    outboundSection.innerHTML = `<div class="source-select origin-pick-select"><span>OUTBOUND</span></div>`;
    const outboundStack = document.createElement("div");
    outboundStack.className = "to-stack";
    Object.entries(groupAllocationsByCustomer(transferAllocations)).forEach(([customer, allocations]) => {
      outboundStack.append(routeCustomerHeader(customer, allocations, "location-outbound"));
      allocations.forEach(allocation => outboundStack.append(allocationLine(allocation, {
        readonly: true,
        hubOutbound: allocation.status === "STAGED_IN_HUB",
        preserveSourceSelection: true,
        returnTransfer: allocation.status === "STAGED_IN_HUB",
        muted: allocation.status === "MOVED_FROM_HUB"
      })));
    });
    outboundSection.append(outboundStack);
    stack.append(outboundSection);
  }
  els.originDetail.append(stack);
  addOriginTransferDropHandlers(els.originDetail, activeOriginLocation);
}

function renderTrucks() {
  els.truckCanvas.innerHTML = "";
  els.truckCanvas.append(connectorLayer());
  state.trucks
    .filter(truck => !truck.parentTruckId)
    .forEach(truck => els.truckCanvas.append(truckRow(truck)));
  els.truckCanvas.append(originTruckAddRow());
}

function originTruckAddRow() {
  const row = document.createElement("section");
  row.className = "origin-add-row";
  const button = document.createElement("button");
  button.type = "button";
  button.textContent = "+ เพิ่มรถ";
  button.addEventListener("click", addOriginTruck);
  row.append(button);
  return row;
}

function connectorLayer() {
  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.classList.add("connector-layer");
  svg.innerHTML = `
    <defs>
      <marker id="connectorArrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse">
        <path d="M 0 0 L 10 5 L 0 10 z"></path>
      </marker>
    </defs>
  `;
  return svg;
}

function truckRow(truck) {
  const row = document.createElement("section");
  row.className = "truck-row";
  row.append(truckCard(truck), flowArea(truck));
  return row;
}

function truckCard(truck) {
  const truckCard = document.createElement("article");
  truckCard.className = "truck-card";
  if (truck.sourceType === "HUB") truckCard.classList.add("from-hub-card");
  truckCard.dataset.truckId = truck.id;
  truckCard.dataset.routeOrderIds = routeIdsAttr(truck.itemIds);
  if (elementHasRouteOrder(truckCard)) truckCard.classList.add("is-route-highlight");
  truckCard.innerHTML = `
    <div class="truck-head">
      <div>
        <h3>รถ</h3>
        ${truck.sourceType === "HUB" ? '<span class="source-badge">ต้นทาง HUB</span>' : ""}
      </div>
      <div class="truck-title-actions">
        <strong>${truck.plate || "Dummy"}</strong>
        <button type="button" data-action="delete-truck" aria-label="ลบรถ">×</button>
      </div>
    </div>
    <div class="truck-controls">
      <select data-field="type" aria-label="ประเภทรถ">
        <option value="เลือกประเภทรถ" ${truck.type === "เลือกประเภทรถ" ? "selected" : ""}>เลือกประเภทรถ</option>
        <option value="4 ล้อ" ${truck.type === "4 ล้อ" ? "selected" : ""}>4 ล้อ</option>
        <option value="6 ล้อ" ${truck.type === "6 ล้อ" ? "selected" : ""}>6 ล้อ</option>
        <option value="10 ล้อ" ${truck.type === "10 ล้อ" ? "selected" : ""}>10 ล้อ</option>
        <option value="Trailer" ${truck.type === "Trailer" ? "selected" : ""}>Trailer</option>
      </select>
      <input data-field="plate" value="${truck.plate === "Dummy" ? "" : truck.plate}" placeholder="ระบุทะเบียนรถ" aria-label="ทะเบียนรถ">
    </div>
    <div class="truck-meta">
      <span>น้ำหนักบรรทุก ${truckWeight(truck).toLocaleString()}/${truck.capacity.toLocaleString()} กก.</span>
    </div>
    <div class="to-stack"></div>
  `;

  truckCard.querySelector('[data-field="type"]')?.addEventListener("change", event => {
    truck.type = event.target.value;
    render();
  });
  truckCard.querySelector('[data-field="plate"]')?.addEventListener("change", event => {
    truck.plate = event.target.value.trim() || "Dummy";
    render();
  });
  truckCard.querySelector('[data-action="delete-truck"]')?.addEventListener("click", () => deleteTruck(truck.id));

  renderTruckItems(truck, truckCard.querySelector(".to-stack"));

  return truckCard;
}

function flowArea(truck) {
  const flowArea = document.createElement("div");
  flowArea.className = "flow-area";

  const truckAllocations = allocationsForTruck(truck.id);
  const hasPickups = routeAllocationsForTruck(truck.id).length > 0;
  const hasDestinations = truck.destinations.length || truckAllocations.some(allocation => allocation.destination !== "TRUCK");
  const isEmptyTruck = !truck.itemIds.length && !truckAllocations.length && !truck.destinations.length;
  const hasHubStop = truck.destinations.some(isHubDestination) || truckAllocations.some(allocation => isHubDestination(allocation.destination));
  if (isEmptyTruck) {
    const dropZone = document.createElement("div");
    dropZone.className = "drop-zone truck-empty-drop-zone";
    dropZone.textContent = "ลากสินค้าที่ต้องการขนมาวางที่นี่";
    flowArea.append(dropZone);
  }
  if (hasPickups || hasDestinations) {
    flowArea.append(routeList(truck));
  }

  const options = document.createElement("div");
  options.className = "destination-options";
  const destinationOptions = calculateDestinationOptions(truck);
  destinationOptions.forEach(destination => {
    const button = document.createElement("button");
    button.type = "button";
    button.textContent = destinationLabel(destination);
    button.addEventListener("click", () => addDestinationPlaceholder(truck.id, destination));
    options.append(button);
  });

  if (!hasHubStop) {
    flowArea.append(options);
  }
  if (!hasDestinations && destinationOptions.length === 0) {
    flowArea.classList.add("is-empty");
  }

  addDropHandlers(flowArea, truck.id);
  return flowArea;
}

function renderTruckItems(truck, stack) {
  const grouped = truckItemsByOrigin(truck);
  planOrigins(truck).forEach(origin => {
    const orders = (grouped[origin] || []).filter(order => qtyInTruck(order, truck.id) > 0);
    if (!orders.length) return;
    const title = document.createElement("h3");
    title.textContent = origin;
    title.className = "truck-origin-title";
    stack.append(title);

    const customerGroups = groupBy(orders, "customer");
    Object.entries(customerGroups).forEach(([customer, customerOrders]) => {
      stack.append(truckCustomerHeader(truck, customer, customerOrders));
      customerOrders.forEach(order => {
        const qty = qtyInTruck(order, truck.id);
        stack.append(toCard(order, qty, {
          truckId: truck.id,
          muted: qty <= 0,
          hideCustomer: true,
          showTruckUndo: qty > 0
        }));
      });
    });
  });
}

function routeList(truck) {
  const routes = document.createElement("div");
  routes.className = "destinations";
  compactRouteStops(truck);
  if (truck.routeStops?.length) {
    addRouteSplitDropHandlers(routes, truck);
    addRouteStopReorderHandlers(routes, truck);
    truck.routeStops.forEach((stop, index) => {
      routes.append(routeReorderMarker(index));
      routes.append(routeStopNode(truck, stop));
    });
    routes.append(routeReorderMarker(truck.routeStops.length));
    return routes;
  }
  pickupNodes(truck).forEach(node => routes.append(node));
  destinationNodes(truck).forEach(node => routes.append(node));
  return routes;
}

function routeReorderMarker(index) {
  const marker = document.createElement("div");
  marker.className = "route-reorder-marker";
  marker.dataset.index = index;
  return marker;
}

function addRouteStopReorderHandlers(routes, truck) {
  const clearMarker = () => {
    routes.querySelectorAll(".route-reorder-marker.is-active").forEach(marker => marker.classList.remove("is-active"));
  };
  const showMarker = index => {
    clearMarker();
    routes.querySelector(`.route-reorder-marker[data-index="${index}"]`)?.classList.add("is-active");
  };
  const planFromEvent = event => {
    if (!dragged?.routeStopMove || dragged.truckId !== truck.id) return null;
    const card = event.target.closest("[data-stop-id]");
    if (!card) return null;
    const targetStopId = card.dataset.stopId;
    if (!targetStopId || targetStopId === dragged.routeStopId) return null;
    const targetIndex = truck.routeStops.findIndex(stop => stop.id === targetStopId);
    if (targetIndex < 0) return null;
    const rect = card.getBoundingClientRect();
    const side = event.clientX < rect.left + rect.width / 2 ? "before" : "after";
    const insertIndex = targetIndex + (side === "after" ? 1 : 0);
    return { insertIndex };
  };

  routes.addEventListener("dragover", event => {
    const plan = planFromEvent(event);
    if (!plan) return;
    event.preventDefault();
    showMarker(plan.insertIndex);
  });
  routes.addEventListener("dragleave", event => {
    if (!routes.contains(event.relatedTarget)) clearMarker();
  });
  routes.addEventListener("drop", event => {
    const plan = planFromEvent(event);
    if (!plan) return;
    event.preventDefault();
    clearMarker();
    moveRouteStopToIndex(truck.id, dragged.routeStopId, plan.insertIndex);
  });
}

function addRouteSplitDropHandlers(routes, truck) {
  routes.addEventListener("dragover", event => {
    if (!dragged?.routeSplit) return;
    const plan = routeSplitPlan(truck, dragged.allocationIds || [dragged.allocationId], dragged.fromRouteStopId, event.target.closest("[data-stop-id]")?.dataset.stopId);
    if (!plan) return;
    event.preventDefault();
    routes.classList.add("is-route-split-over");
  });
  routes.addEventListener("dragleave", event => {
    if (!routes.contains(event.relatedTarget)) routes.classList.remove("is-route-split-over");
  });
  routes.addEventListener("drop", event => {
    if (!dragged?.routeSplit) return;
    const plan = routeSplitPlan(truck, dragged.allocationIds || [dragged.allocationId], dragged.fromRouteStopId, event.target.closest("[data-stop-id]")?.dataset.stopId);
    if (!plan) return;
    event.preventDefault();
    routes.classList.remove("is-route-split-over");
    splitRouteStop(truck.id, plan.allocationIds, dragged.fromRouteStopId, plan.insertIndex);
  });
}

function routeSplitPlan(truck, allocationIds, fromStopId, targetStopId = null) {
  const ids = [...new Set(allocationIds.filter(Boolean))];
  if (!ids.length || !truck?.routeStops?.length) return null;
  const fromIndex = truck.routeStops.findIndex(stop => stop.id === fromStopId);
  if (fromIndex < 0) return null;
  const fromStop = truck.routeStops[fromIndex];
  const targetIndex = targetStopId
    ? truck.routeStops.findIndex(stop => stop.id === targetStopId)
    : fromIndex + 1;
  const requestedIndex = targetIndex >= 0 ? targetIndex : fromIndex + 1;
  let insertIndex = Math.max(0, Math.min(requestedIndex, truck.routeStops.length));
  if (fromStop.type === "PICK" || fromStop.type === "OUTBOUND") {
    const dropIndexes = ids.map(allocationId => truck.routeStops.findIndex(stop =>
      stop.type === "DROP" && stop.allocationIds.includes(allocationId)
    ));
    if (dropIndexes.some(index => index < 0)) return null;
    const firstDropIndex = Math.min(...dropIndexes);
    insertIndex = Math.min(Math.max(requestedIndex, fromIndex + 1), firstDropIndex);
  }
  if (!canSplitRouteStop(truck, ids, fromStopId, insertIndex)) return null;
  return { allocationIds: ids, insertIndex };
}

function addRouteStopDragHandlers(card, truck, stop) {
  const head = card.querySelector(".destination-head");
  head.addEventListener("dragstart", event => {
    dragged = {
      routeStopId: stop.id,
      truckId: truck.id,
      routeStopMove: true
    };
    event.dataTransfer.setData("text/plain", stop.id);
    event.dataTransfer.effectAllowed = "move";
  });
  head.addEventListener("dragend", () => {
    dragged = null;
    document.querySelectorAll(".route-reorder-marker.is-active")
      .forEach(marker => marker.classList.remove("is-active"));
  });
}

function addPickupMergeHandlers(card, truck, stop) {
  card.addEventListener("dragover", event => {
    if (!dragged?.routeSplit || dragged.fromRouteStopId === stop.id) return;
    const fromStop = stopById(truck, dragged.fromRouteStopId);
    if (!fromStop || fromStop.location !== stop.location || fromStop.type !== stop.type) return;
    event.preventDefault();
    card.classList.add("is-merge-over");
  });
  card.addEventListener("dragleave", () => card.classList.remove("is-merge-over"));
  card.addEventListener("drop", event => {
    if (!dragged?.routeSplit || dragged.fromRouteStopId === stop.id) return;
    const allocationIds = dragged.allocationIds || [dragged.allocationId];
    const fromStop = stopById(truck, dragged.fromRouteStopId);
    if (!fromStop || fromStop.location !== stop.location || fromStop.type !== stop.type) return;
    event.preventDefault();
    card.classList.remove("is-merge-over");
    moveAllocationsToPickupStop(truck.id, allocationIds, dragged.fromRouteStopId, stop.id);
  });
}

function addHubDropHandlers(zone, hubId) {
  zone.addEventListener("dragover", event => {
    if (!dragged?.dropToHub) return;
    event.preventDefault();
    zone.classList.add("is-over");
  });
  zone.addEventListener("dragleave", () => zone.classList.remove("is-over"));
  zone.addEventListener("drop", event => {
    if (!dragged?.dropToHub) return;
    event.preventDefault();
    event.stopPropagation();
    zone.classList.remove("is-over");
    const hub = state.hubs.find(item => item.id === hubId);
    if (!hub) return;
    openDropTransferQuantityModal({
      title: `ลงสินค้าเข้า ${hub.name}`,
      allocationIds: dragged.allocationIds || [dragged.allocationId],
      fromStopId: dragged.fromRouteStopId,
      transferLocation: hub.name,
      transferFields: {
        destination: `HUB:${hub.name}`,
        status: "STAGED_IN_HUB",
        hubId: hub.id,
        hubName: hub.name,
        transferLocationType: null,
        transferLocationName: null
      }
    });
  });
}

function addOriginTransferDropHandlers(tab, origin) {
  tab.addEventListener("dragover", event => {
    if (
      dragged?.dropToHub ||
      (dragged?.fromTruckId && (dragged.orderIds?.length || dragged.orderId)) ||
      (dragged?.routeSplit && dragged?.fromTruckId)
    ) {
      event.preventDefault();
      tab.classList.add("is-over");
    }
  });
  tab.addEventListener("dragleave", () => tab.classList.remove("is-over"));
  tab.addEventListener("drop", event => {
    if (
      !dragged?.dropToHub &&
      !(dragged?.fromTruckId && (dragged.orderIds?.length || dragged.orderId)) &&
      !(dragged?.routeSplit && dragged?.fromTruckId)
    ) return;
    event.preventDefault();
    event.stopPropagation();
    tab.classList.remove("is-over");
    if (dragged?.dropToHub) {
      openDropTransferQuantityModal({
        title: `ลงสินค้าเข้า ${origin}`,
        allocationIds: dragged.allocationIds || [dragged.allocationId],
        fromStopId: dragged.fromRouteStopId,
        transferLocation: origin,
        transferFields: {
          destination: `ORIGIN:${origin}`,
          status: "STAGED_IN_HUB",
          transferLocationType: "ORIGIN",
          transferLocationName: origin,
          hubId: null,
          hubName: null
        }
      });
      return;
    }
    if (dragged?.routeSplit && dragged?.fromTruckId) {
      openReturnRouteAllocationsToOriginModal(dragged.fromTruckId, dragged.allocationIds || [dragged.allocationId], origin);
      return;
    }
    if (dragged?.fromTruckId && (dragged.orderIds?.length || dragged.orderId)) {
      const orderIds = dragged.orderIds || [dragged.orderId];
      openReturnTruckItemsToOriginModal(dragged.fromTruckId, orderIds, origin);
      return;
    }
  });
}

function moveDropAllocationsToHub(hubId, allocationIds, fromStopId) {
  const hub = state.hubs.find(item => item.id === hubId);
  const ids = [...new Set((Array.isArray(allocationIds) ? allocationIds : [allocationIds]).filter(Boolean))];
  const foundItems = ids.map(allocationById).filter(Boolean);
  if (!hub || !ids.length || foundItems.length !== ids.length) return false;
  const truck = truckById(foundItems[0].allocation.truckId);
  const fromStop = stopById(truck, fromStopId);
  if (!truck || !fromStop || !["DROP", "INBOUND"].includes(fromStop.type)) return false;

  const fromIndex = truck.routeStops.findIndex(stop => stop.id === fromStopId);
  fromStop.allocationIds = fromStop.allocationIds.filter(id => !ids.includes(id));

  let inbound = truck.routeStops.find(stop => stop.type === "INBOUND" && stop.location === hub.name);
  if (!inbound) {
    inbound = createRouteStop("INBOUND", hub.name);
    truck.routeStops.splice(fromIndex + 1, 0, inbound);
  }
  ids.forEach(id => addAllocationToStop(inbound, id));
  foundItems.forEach(({ allocation }) => {
    allocation.destination = `HUB:${hub.name}`;
    allocation.status = "STAGED_IN_HUB";
    allocation.hubId = hub.id;
    allocation.hubName = hub.name;
  });
  compactRouteStops(truck);
  clearRouteDropSelection();
  render();
  return true;
}

function moveDropAllocationsToOrigin(origin, allocationIds, fromStopId) {
  const ids = [...new Set((Array.isArray(allocationIds) ? allocationIds : [allocationIds]).filter(Boolean))];
  const foundItems = ids.map(allocationById).filter(Boolean);
  if (!origin || !ids.length || foundItems.length !== ids.length) return false;
  const truck = truckById(foundItems[0].allocation.truckId);
  const fromStop = stopById(truck, fromStopId);
  if (!truck || !fromStop || fromStop.type !== "DROP") return false;

  const fromIndex = truck.routeStops.findIndex(stop => stop.id === fromStopId);
  fromStop.allocationIds = fromStop.allocationIds.filter(id => !ids.includes(id));

  let inbound = truck.routeStops.find(stop => stop.type === "INBOUND" && stop.location === origin);
  if (!inbound) {
    inbound = createRouteStop("INBOUND", origin);
    truck.routeStops.splice(fromIndex + 1, 0, inbound);
  }
  ids.forEach(id => addAllocationToStop(inbound, id));
  foundItems.forEach(({ allocation }) => {
    allocation.destination = `ORIGIN:${origin}`;
    allocation.status = "STAGED_IN_HUB";
    allocation.transferLocationType = "ORIGIN";
    allocation.transferLocationName = origin;
    allocation.hubId = null;
    allocation.hubName = null;
  });
  compactRouteStops(truck);
  clearRouteDropSelection();
  render();
  return true;
}

function splitDropAllocationForTransfer(found, qty, transferFields) {
  const { order, allocation } = found;
  const isFullMove = qty >= allocation.qty;
  if (isFullMove) {
    Object.assign(allocation, transferFields);
    return allocation.id;
  }

  allocation.qty -= qty;
  const transferAllocation = {
    id: `A-${state.nextAllocation++}`,
    truckId: allocation.truckId,
    destination: transferFields.destination,
    status: transferFields.status,
    qty,
    autoRoute: allocation.autoRoute,
    timestamp: Date.now(),
    ...transferFields
  };
  order.allocations.push(transferAllocation);
  const truck = truckById(allocation.truckId);
  (truck?.routeStops || []).forEach(stop => {
    if ((stop.type === "PICK" || stop.type === "OUTBOUND") && stop.allocationIds.includes(allocation.id)) {
      addAllocationToStop(stop, transferAllocation.id);
    }
  });
  return transferAllocation.id;
}

function moveDropAllocationQuantitiesToTransfer({ allocationIds, qtyById, fromStopId, transferLocation, transferFields }) {
  const ids = [...new Set((Array.isArray(allocationIds) ? allocationIds : [allocationIds]).filter(Boolean))];
  const foundItems = ids.map(allocationById).filter(Boolean);
  if (!transferLocation || !ids.length || !foundItems.length) return false;
  const truck = truckById(foundItems[0].allocation.truckId);
  const fromStop = stopById(truck, fromStopId);
  if (!truck || !fromStop || fromStop.type !== "DROP") return false;

  const fromIndex = truck.routeStops.findIndex(stop => stop.id === fromStopId);
  let inbound = truck.routeStops.find(stop => stop.type === "INBOUND" && stop.location === transferLocation);
  if (!inbound) {
    inbound = createRouteStop("INBOUND", transferLocation);
    truck.routeStops.splice(fromIndex + 1, 0, inbound);
  }

  foundItems.forEach(found => {
    const qty = Math.min(qtyById.get(found.allocation.id) || 0, found.allocation.qty);
    if (qty <= 0) return;
    const isFullMove = qty >= found.allocation.qty;
    const transferAllocationId = splitDropAllocationForTransfer(found, qty, transferFields);
    if (isFullMove) {
      fromStop.allocationIds = fromStop.allocationIds.filter(id => id !== found.allocation.id);
    }
    addAllocationToStop(inbound, transferAllocationId);
  });

  compactRouteStops(truck);
  clearRouteDropSelection();
  render();
  return true;
}

function openDropTransferQuantityModal({ title, allocationIds, fromStopId, transferLocation, transferFields }) {
  const items = [...new Set(allocationIds)]
    .map(allocationId => {
      const found = allocationById(allocationId);
      return found ? {
        id: allocationId,
        max: found.allocation.qty,
        summary: allocationMoveSummary(found.order, found.allocation, `ไป: ${transferLocation}`)
      } : null;
    })
    .filter(Boolean);
  openQuantityMoveModal({
    title,
    items,
    onConfirm: qtyById => moveDropAllocationQuantitiesToTransfer({
      allocationIds: items.map(item => item.id),
      qtyById,
      fromStopId,
      transferLocation,
      transferFields
    })
  });
}

function removeAllocationFromInboundStops(truck, allocationId) {
  (truck.routeStops || []).forEach(stop => {
    if (stop.type === "INBOUND") {
      stop.allocationIds = stop.allocationIds.filter(id => id !== allocationId);
    }
  });
}

function removeAllocationFromStopsByType(truck, allocationId, type) {
  (truck.routeStops || []).forEach(stop => {
    if (stop.type === type) {
      stop.allocationIds = stop.allocationIds.filter(id => id !== allocationId);
    }
  });
}

function addReturnedTransferToRoute(truck, sourceAllocationId, returnedAllocationId, customer) {
  truck.routeStops ||= [];
  (truck.routeStops || []).forEach(stop => {
    if (stop.type === "PICK" && stop.allocationIds.includes(sourceAllocationId)) {
      addAllocationToStop(stop, returnedAllocationId);
    }
  });

  let drop = truck.routeStops.find(stop => stop.type === "DROP" && stop.location === customer);
  if (!drop) {
    drop = createRouteStop("DROP", customer);
    const sourceIndex = truck.routeStops.findIndex(stop =>
      (stop.type === "PICK" || stop.type === "OUTBOUND" || stop.type === "INBOUND") &&
      stop.allocationIds.includes(sourceAllocationId)
    );
    truck.routeStops.splice(sourceIndex >= 0 ? sourceIndex + 1 : truck.routeStops.length, 0, drop);
  }
  addAllocationToStop(drop, returnedAllocationId);
}

function findReturnTargetAllocation(found, sourceAllocationId) {
  return found.order.allocations.find(allocation =>
    allocation.id !== sourceAllocationId &&
    allocation.truckId === found.allocation.truckId &&
    allocation.destination === found.order.customer &&
    allocation.status === "ASSIGNED"
  );
}

function resetTransferFields(allocation, customer) {
  allocation.destination = customer;
  allocation.status = "ASSIGNED";
  allocation.hubId = null;
  allocation.hubName = null;
  allocation.transferLocationType = null;
  allocation.transferLocationName = null;
  allocation.transferLocationId = null;
}

function returnTransferAllocationQuantities(allocationIds, qtyById) {
  const ids = [...new Set((Array.isArray(allocationIds) ? allocationIds : [allocationIds]).filter(Boolean))];
  if (!ids.length) return false;

  ids.forEach(allocationId => {
    const found = allocationById(allocationId);
    const qty = Math.min(qtyById.get(allocationId) || 0, found?.allocation.qty || 0);
    if (!found || found.allocation.status !== "STAGED_IN_HUB" || qty <= 0) return;

    const truck = truckById(found.allocation.truckId);
    if (!truck) return;
    const isFullMove = qty >= found.allocation.qty;

    if (isFullMove) {
      removeAllocationFromInboundStops(truck, allocationId);
      removeAllocationFromStopsByType(truck, allocationId, "OUTBOUND");
      resetTransferFields(found.allocation, found.order.customer);
      addReturnedTransferToRoute(truck, allocationId, allocationId, found.order.customer);
    } else {
      found.allocation.qty -= qty;
      const returnTarget = findReturnTargetAllocation(found, allocationId);
      if (returnTarget) {
        returnTarget.qty += qty;
        addReturnedTransferToRoute(truck, allocationId, returnTarget.id, found.order.customer);
      } else {
        const returnedAllocation = {
          ...found.allocation,
          id: `A-${state.nextAllocation++}`,
          destination: found.order.customer,
          status: "ASSIGNED",
          qty,
          hubId: null,
          hubName: null,
          transferLocationType: null,
          transferLocationName: null,
          transferLocationId: null,
          timestamp: Date.now()
        };
        found.order.allocations.push(returnedAllocation);
        addReturnedTransferToRoute(truck, allocationId, returnedAllocation.id, found.order.customer);
      }
    }

    compactRouteStops(truck);
    syncTruckOrigins(truck);
  });

  clearHubOutboundSelection();
  render();
  return true;
}

function openReturnTransferQuantityModal(allocationIds) {
  const items = [...new Set(allocationIds)]
    .map(allocationId => {
      const found = allocationById(allocationId);
      const transferName = found?.allocation.hubName || found?.allocation.transferLocationName;
      return found && found.allocation.status === "STAGED_IN_HUB" ? {
        id: allocationId,
        max: found.allocation.qty,
        summary: allocationMoveSummary(found.order, found.allocation, `จาก: ${transferName || "Transfer"}<br>กลับเข้ารถเดิม`)
      } : null;
    })
    .filter(Boolean);
  openQuantityMoveModal({
    title: "คืนสินค้ากลับรถเดิม",
    helper: "ระบุจำนวนที่ต้องการคืนจากจุด transfer กลับไปแผนส่งเดิม",
    items,
    onConfirm: qtyById => returnTransferAllocationQuantities(items.map(item => item.id), qtyById)
  });
}

function returnTruckItemsToOrigin(truckId, orderIds, qtyById) {
  const truck = truckById(truckId);
  const ids = [...new Set((Array.isArray(orderIds) ? orderIds : [orderIds]).filter(Boolean))];
  if (!truck || !ids.length) return false;

  ids.forEach(orderId => {
    const order = orderById(orderId);
    let remaining = Math.min(qtyById.get(orderId) || 0, order ? qtyInTruck(order, truckId) : 0);
    if (!order || remaining <= 0) return;

    for (const allocation of order.allocations) {
      if (allocation.truckId !== truckId || allocation.destination !== "TRUCK" || remaining <= 0) continue;
      const returnQty = Math.min(allocation.qty, remaining);
      allocation.qty -= returnQty;
      remaining -= returnQty;
    }
    order.allocations = order.allocations.filter(allocation => allocation.qty > 0);
    if (!order.allocations.some(allocation => allocation.truckId === truckId)) {
      truck.itemIds = truck.itemIds.filter(id => id !== orderId);
    }
  });

  selectedTruckItems.clear();
  selectedTruckItem = null;
  syncTruckOrigins(truck);
  render();
  return true;
}

function openReturnTruckItemsToOriginModal(truckId, orderIds, origin) {
  const items = [...new Set(orderIds)]
    .map(orderId => {
      const order = orderById(orderId);
      const max = order && order.origin === origin ? qtyInTruck(order, truckId) : 0;
      return order && max > 0 ? {
        id: order.id,
        max,
        summary: orderMoveSummary(order, `จากรถ: ${truckById(truckId)?.plate || "Dummy"}<br>คืนไป: ${origin}`)
      } : null;
    })
    .filter(Boolean);
  openQuantityMoveModal({
    title: `คืนสินค้าไป ${origin}`,
    items,
    onConfirm: qtyById => returnTruckItemsToOrigin(truckId, items.map(item => item.id), qtyById)
  });
}

function returnRouteAllocationsToOrigin({ truckId, allocationIds, qtyById, origin }) {
  const truck = truckById(truckId);
  const ids = [...new Set((Array.isArray(allocationIds) ? allocationIds : [allocationIds]).filter(Boolean))];
  if (!truck || !ids.length) return false;

  ids.forEach(allocationId => {
    const found = allocationById(allocationId);
    const qty = Math.min(qtyById.get(allocationId) || 0, found?.allocation.qty || 0);
    if (!found || found.allocation.truckId !== truckId || found.order.origin !== origin || qty <= 0) return;
    const isFullReturn = qty >= found.allocation.qty;

    if (isFullReturn) {
      removeAllocationFromStops(truck, allocationId);
      found.order.allocations = found.order.allocations.filter(allocation => allocation.id !== allocationId);
    } else {
      found.allocation.qty -= qty;
    }

    if (!found.order.allocations.some(allocation => allocation.truckId === truckId && allocation.qty > 0)) {
      truck.itemIds = truck.itemIds.filter(id => id !== found.order.id);
    }
  });

  compactRouteStops(truck);
  syncTruckOrigins(truck);
  clearRoutePickupSelection();
  render();
  return true;
}

function openReturnRouteAllocationsToOriginModal(truckId, allocationIds, origin) {
  const items = [...new Set(allocationIds)]
    .map(allocationId => {
      const found = allocationById(allocationId);
      return found && found.allocation.truckId === truckId && found.order.origin === origin ? {
        id: allocationId,
        max: found.allocation.qty,
        summary: allocationMoveSummary(found.order, found.allocation, `จากรถ: ${truckById(truckId)?.plate || "Dummy"}<br>คืนไป: ${origin}`)
      } : null;
    })
    .filter(Boolean);
  openQuantityMoveModal({
    title: `คืนสินค้าไป ${origin}`,
    items,
    onConfirm: qtyById => returnRouteAllocationsToOrigin({
      truckId,
      allocationIds: items.map(item => item.id),
      qtyById,
      origin
    })
  });
}

function ensureMatchingRouteStop(targetTruck, sourceStop) {
  targetTruck.routeStops ||= [];
  let targetStop = (sourceStop.type === "PICK" || sourceStop.type === "OUTBOUND")
    ? pickupLikeStopAt(targetTruck, sourceStop.location)
    : targetTruck.routeStops.find(stop => stop.type === sourceStop.type && stop.location === sourceStop.location);
  if (!targetStop) {
    targetStop = createRouteStop(sourceStop.type, sourceStop.location);
    targetTruck.routeStops.push(targetStop);
  }
  return targetStop;
}

function transferRouteAllocationQuantities({ sourceTruckId, targetTruckId, allocationIds, qtyById }) {
  const sourceTruck = truckById(sourceTruckId);
  const targetTruck = truckById(targetTruckId);
  const ids = [...new Set((Array.isArray(allocationIds) ? allocationIds : [allocationIds]).filter(Boolean))];
  if (!sourceTruck || !targetTruck || sourceTruckId === targetTruckId || !ids.length) return false;

  ids.forEach(allocationId => {
    const found = allocationById(allocationId);
    const qty = Math.min(qtyById.get(allocationId) || 0, found?.allocation.qty || 0);
    if (!found || found.allocation.truckId !== sourceTruckId || qty <= 0) return;

    const sourceStops = (sourceTruck.routeStops || []).filter(stop => stop.allocationIds.includes(allocationId));
    if (!sourceStops.length) return;
    const isFullMove = qty >= found.allocation.qty;
    let targetAllocationId = allocationId;

    if (isFullMove) {
      found.allocation.truckId = targetTruckId;
      sourceStops.forEach(stop => {
        stop.allocationIds = stop.allocationIds.filter(id => id !== allocationId);
      });
    } else {
      found.allocation.qty -= qty;
      const movedAllocation = {
        ...found.allocation,
        id: `A-${state.nextAllocation++}`,
        truckId: targetTruckId,
        qty,
        timestamp: Date.now()
      };
      found.order.allocations.push(movedAllocation);
      targetAllocationId = movedAllocation.id;
    }

    sourceStops.forEach(sourceStop => {
      const targetStop = ensureMatchingRouteStop(targetTruck, sourceStop);
      addAllocationToStop(targetStop, targetAllocationId);
    });

    if (!targetTruck.itemIds.includes(found.order.id)) targetTruck.itemIds.push(found.order.id);
    if (!found.order.allocations.some(allocation => allocation.truckId === sourceTruckId && allocation.qty > 0)) {
      sourceTruck.itemIds = sourceTruck.itemIds.filter(id => id !== found.order.id);
    }
  });

  compactRouteStops(sourceTruck);
  compactRouteStops(targetTruck);
  syncTruckOrigins(sourceTruck);
  syncTruckOrigins(targetTruck);
  clearRoutePickupSelection();
  clearRouteDropSelection();
  render();
  return true;
}

function openRouteAllocationTransferModal(sourceTruckId, targetTruckId, allocationIds) {
  const items = [...new Set(allocationIds)]
    .map(allocationId => {
      const found = allocationById(allocationId);
      return found && found.allocation.truckId === sourceTruckId ? {
        id: allocationId,
        max: found.allocation.qty,
        summary: allocationMoveSummary(found.order, found.allocation, `ไปยังรถ: ${truckById(targetTruckId)?.plate || "Dummy"}`)
      } : null;
    })
    .filter(Boolean);
  openQuantityMoveModal({
    title: "ย้ายสินค้าไปอีกรถ",
    items,
    onConfirm: qtyById => transferRouteAllocationQuantities({
      sourceTruckId,
      targetTruckId,
      allocationIds: items.map(item => item.id),
      qtyById
    })
  });
}


function routeStopNode(truck, stop) {
  const allocations = stop.allocationIds
    .map(allocationById)
    .filter(Boolean)
    .filter(({ allocation }) => allocation.truckId === truck.id)
    .map(({ order, allocation }) => ({ ...allocation, order }));
  const node = document.createElement("div");
  const isPickupLike = stop.type === "PICK" || stop.type === "OUTBOUND";
  node.className = `destination-node ${isPickupLike ? "pickup-node" : stop.type === "INBOUND" ? "inbound-node" : "drop-node"}`;
  node.dataset.stopId = stop.id;
  const card = document.createElement("article");
  card.className = isPickupLike
    ? "pickup-card"
    : stop.type === "INBOUND"
      ? "destination-card inbound-card"
      : "destination-card drop-card";
  card.dataset.truckId = truck.id;
  card.dataset.stopId = stop.id;
  card.dataset.routeOrderIds = routeIdsAttr(allocations.map(({ order }) => order.id));
  if (elementHasRouteOrder(card)) card.classList.add("is-route-highlight");
  card.innerHTML = `
    <div class="destination-head" draggable="true">
      ${stopHeading(stop, allocations)}
    </div>
    <div class="destination-items"></div>
  `;
  addRouteStopDragHandlers(card, truck, stop);
  addPickupMergeHandlers(card, truck, stop);
  const items = card.querySelector(".destination-items");
  const grouped = stop.type === "PICK"
    ? groupAllocationsByCustomer(allocations)
    : groupAllocationsByCustomer(allocations);
  Object.entries(grouped).forEach(([customer, customerAllocations]) => {
    if (isPickupLike) {
      items.append(routeCustomerHeader(customer, customerAllocations, "route-pickup", stop.id));
    } else if (stop.type === "DROP" || stop.type === "INBOUND") {
      items.append(routeCustomerHeader(customer, customerAllocations, "route-drop", stop.id));
    } else {
      const title = document.createElement("h4");
      title.className = "route-customer-title";
      title.textContent = customer;
      items.append(title);
    }
    customerAllocations.forEach(routeAllocation => {
      items.append(allocationLine(routeAllocation, {
        readonly: stop.type !== "PICK",
        hideActions: true,
        pickupStopId: isPickupLike ? stop.id : null,
        pickupTruckId: isPickupLike ? truck.id : null,
        dropStopId: stop.type === "DROP" || stop.type === "INBOUND" ? stop.id : null,
        dropTruckId: stop.type === "DROP" || stop.type === "INBOUND" ? truck.id : null,
        keepRouteActive: true
      }));
    });
  });
  node.append(card);
  return node;
}

function splitRouteStop(truckId, allocationIds, fromStopId, requestedIndex) {
  const truck = truckById(truckId);
  const ids = [...new Set((Array.isArray(allocationIds) ? allocationIds : [allocationIds]).filter(Boolean))];
  const foundItems = ids.map(allocationById).filter(Boolean);
  if (!truck || !foundItems.length || foundItems.length !== ids.length) return;
  const originalStops = truck.routeStops.map(stop => ({ ...stop, allocationIds: [...stop.allocationIds] }));
  const fromStop = stopById(truck, fromStopId);
  if (!fromStop) return;

  const currentPickIndex = truck.routeStops.findIndex(stop => stop.id === fromStopId);
  let insertIndex = Math.max(0, Math.min(requestedIndex, truck.routeStops.length));
  if (fromStop.type === "PICK" || fromStop.type === "OUTBOUND") {
    const dropIndexes = ids.map(allocationId => (truck.routeStops || []).findIndex(stop =>
      stop.type === "DROP" && stop.allocationIds.includes(allocationId)
    ));
    if (dropIndexes.some(index => index < 0)) return;
    const firstDropIndex = Math.min(...dropIndexes);
    if (insertIndex > firstDropIndex) insertIndex = firstDropIndex;
  }
  const movesEntireStop = fromStop.allocationIds.every(id => ids.includes(id));
  if (insertIndex === currentPickIndex || (movesEntireStop && insertIndex === currentPickIndex + 1)) return;

  fromStop.allocationIds = fromStop.allocationIds.filter(id => !ids.includes(id));
  if (!fromStop.allocationIds.length) {
    const removedIndex = truck.routeStops.findIndex(stop => stop.id === fromStop.id);
    truck.routeStops.splice(removedIndex, 1);
    if (removedIndex < insertIndex) insertIndex -= 1;
  }

  const newStop = createRouteStop(fromStop.type, fromStop.location);
  newStop.allocationIds.push(...ids);
  truck.routeStops.splice(insertIndex, 0, newStop);
  if (!routeStopsAreValid(truck.routeStops)) {
    truck.routeStops = originalStops;
    return;
  }
  clearRoutePickupSelection();
  clearRouteDropSelection();
  render();
}

function splitPickupStop(truckId, allocationIds, fromStopId, requestedIndex) {
  splitRouteStop(truckId, allocationIds, fromStopId, requestedIndex);
}

function pickupNodes(truck) {
  const grouped = groupAllocationsByOrigin(routeAllocationsForTruck(truck.id));
  return planOrigins(truck)
    .filter(origin => grouped[origin]?.length)
    .map(origin => {
      const allocations = grouped[origin];
      const node = document.createElement("div");
      node.className = "destination-node pickup-node";
      const card = document.createElement("article");
      card.className = "pickup-card";
      card.dataset.truckId = truck.id;
      card.dataset.origin = origin;
      card.dataset.routeOrderIds = routeIdsAttr(allocations.map(allocation => allocation.order.id));
      if (elementHasRouteOrder(card)) card.classList.add("is-route-highlight");
      card.innerHTML = `
        <div class="destination-head">
          <h3>PICK - ${shortLocationName(origin)}</h3>
        </div>
        <div class="destination-items"></div>
      `;
      const items = card.querySelector(".destination-items");
      Object.entries(groupAllocationsByCustomer(allocations)).forEach(([customer, customerAllocations]) => {
        const title = document.createElement("h4");
        title.className = "route-customer-title";
        title.textContent = customer;
        items.append(title);
        customerAllocations.forEach(allocation => {
          items.append(allocationLine(allocation, { readonly: true }));
        });
      });
      node.append(card);
      return node;
    });
}

function originSequence(truck) {
  const origins = planOrigins(truck);
  if (origins.length <= 1) return null;

  const section = document.createElement("section");
  section.className = "origin-sequence";
  section.innerHTML = `<h4>ลำดับการรับสินค้า</h4><div class="origin-sequence-list"></div>`;
  const list = section.querySelector(".origin-sequence-list");
  origins.forEach((origin, index) => {
    const item = document.createElement("div");
    item.className = "origin-step";
    item.innerHTML = `
      <span>${origin}</span>
      <div>
        <button type="button" data-action="up" ${index === 0 ? "disabled" : ""} aria-label="เลื่อนต้นทางขึ้น">‹</button>
        <button type="button" data-action="down" ${index === origins.length - 1 ? "disabled" : ""} aria-label="เลื่อนต้นทางลง">›</button>
      </div>
    `;
    item.querySelector('[data-action="up"]').addEventListener("click", () => moveOrigin(truck.id, index, -1));
    item.querySelector('[data-action="down"]').addEventListener("click", () => moveOrigin(truck.id, index, 1));
    list.append(item);
    if (index < origins.length - 1) {
      const arrow = document.createElement("span");
      arrow.className = "origin-sequence-arrow";
      arrow.textContent = "↓";
      list.append(arrow);
    }
  });
  return section;
}

function destinationNodes(truck) {
  const grouped = groupAllocations(allocationsForTruck(truck.id).filter(allocation => allocation.destination !== "TRUCK"));
  const names = [...new Set([...truck.destinations, ...Object.keys(grouped)])];
  return names.map((destination, index) => {
    const allocations = grouped[destination] || [];
    const node = document.createElement("div");
    node.className = "destination-node";
    if (isHubDestination(destination)) node.classList.add("has-hub-spawn");
    const card = document.createElement("article");
    card.className = isHubDestination(destination) ? "hub-card" : "destination-card";
    if (!isHubDestination(destination)) card.classList.add("drop-card");
    card.dataset.truckId = truck.id;
    card.dataset.destination = destination;
    card.dataset.routeOrderIds = routeIdsAttr(allocations.map(allocation => allocation.order.id));
    if (elementHasRouteOrder(card)) card.classList.add("is-route-highlight");
    const showDestinationTools = isHubDestination(destination) || allocations.some(allocation => !allocation.autoRoute);
    card.innerHTML = `
      <div class="destination-head">
        <h3>${isHubDestination(destination) ? destinationLabel(destination) : `DROP - ${destination}`}</h3>
        ${showDestinationTools ? `
          <div class="destination-tools">
            <button type="button" data-action="move-left" ${index === 0 ? "disabled" : ""} aria-label="เลื่อนไปก่อนหน้า">‹</button>
            <button type="button" data-action="move-right" ${index === names.length - 1 ? "disabled" : ""} aria-label="เลื่อนไปถัดไป">›</button>
            <button type="button" data-action="remove" aria-label="ลบปลายทาง">×</button>
          </div>
        ` : ""}
      </div>
      <div class="destination-items"></div>
      <p class="status-note">${isHubDestination(destination) ? "STAGED_IN_HUB" : "ASSIGNED"}</p>
    `;
    card.querySelector('[data-action="move-left"]')?.addEventListener("click", event => {
      event.stopPropagation();
      moveDestination(truck.id, index, -1);
    });
    card.querySelector('[data-action="move-right"]')?.addEventListener("click", event => {
      event.stopPropagation();
      moveDestination(truck.id, index, 1);
    });
    card.querySelector('[data-action="remove"]')?.addEventListener("click", event => {
      event.stopPropagation();
      removeDestination(truck.id, destination);
    });
    addDestinationDropHandlers(card, truck.id, destination);
    const items = card.querySelector(".destination-items");
    allocations.forEach(allocation => {
      items.append(allocationLine(allocation));
    });
    if (!allocations.length) {
      const empty = document.createElement("div");
      empty.className = "empty-destination";
      empty.textContent = "ลากสินค้าจากรถมาวางที่นี่";
      items.append(empty);
    }
    node.append(card);
    if (isHubDestination(destination)) {
      const activeHubAllocations = allocations.filter(allocation => allocation.status === "STAGED_IN_HUB");
      const downstreamDestinations = names.slice(index + 1);
      const hasSameTruckDownstream = downstreamDestinations.length > 0;
      const hubBranch = document.createElement("div");
      hubBranch.className = "hub-spawn-branch";
      if (truckOpenItems(truck).length || hasSameTruckDownstream) {
        hubBranch.append(sameTruckContinuation(truck, downstreamDestinations));
      }
      renderHubChildTrucks(truck.id, destination).forEach(childRow => hubBranch.append(childRow));
      if (activeHubAllocations.length) {
        const hubSpawn = document.createElement("button");
        hubSpawn.type = "button";
        hubSpawn.className = "hub-add-truck";
        hubSpawn.textContent = "+ เพิ่มรถ";
        hubSpawn.addEventListener("click", event => {
          event.stopPropagation();
          addTruckFromHub(truck.id, destination);
        });
        hubBranch.append(hubSpawn);
      }
      node.append(hubBranch);
    }
    return node;
  });
}

function allocationLine(allocation, options = {}) {
  const isMovedFromHub = allocation.status === "MOVED_FROM_HUB" && !options.keepRouteActive;
  const line = document.createElement("div");
  line.className = "allocation-line";
  line.dataset.routeOrderIds = allocation.order.id;
  if (isMovedFromHub || options.muted) line.classList.add("is-muted");
  if (elementHasRouteOrder(line)) line.classList.add("is-route-highlight");
  if (selectedAllocationItems.has(allocation.id)) line.classList.add("is-selected");
  line.draggable = Boolean(options.pickupStopId) || (!options.readonly && isHubDestination(allocation.destination) && !isMovedFromHub);
  if (options.pickupStopId) {
    line.classList.add("is-pick-draggable");
    const selectionKey = routePickupKey(allocation.id, options.pickupStopId);
    if (selectedRoutePickups.has(selectionKey)) {
      line.classList.add("is-selected");
    }
    line.addEventListener("click", event => {
      if (event.target.closest("button")) return;
      event.stopPropagation();
      if (selectedRoutePickups.has(selectionKey)) {
        selectedRoutePickups.delete(selectionKey);
      } else {
        clearActionSelections("route-pickup");
        const hasOtherStopSelection = [...selectedRoutePickups]
          .some(key => parseRoutePickupKey(key).fromStopId !== options.pickupStopId);
        if (hasOtherStopSelection) clearRoutePickupSelection();
        selectedRoutePickups.add(selectionKey);
      }
      render();
    });
    line.addEventListener("dragstart", event => {
      if (!selectedRoutePickups.has(selectionKey)) {
        clearActionSelections("route-pickup");
        selectedRoutePickups.add(selectionKey);
      }
      const allocationIds = selectedPickupIdsForStop(options.pickupStopId, allocation.id);
      dragged = {
        allocationIds,
        allocationId: allocation.id,
        fromRouteStopId: options.pickupStopId,
        fromTruckId: options.pickupTruckId || null,
        routeSplit: true
      };
      event.dataTransfer.setData("text/plain", allocationIds.join(","));
      event.dataTransfer.effectAllowed = "move";
    });
    line.addEventListener("dragend", () => {
      dragged = null;
    });
  }
  if (options.dropStopId) {
    line.classList.add("is-drop-draggable");
    const dropSelectionKey = routeDropKey(allocation.id, options.dropStopId);
    if (selectedRouteDrops.has(dropSelectionKey)) {
      line.classList.add("is-selected");
    }
    line.draggable = true;
    line.addEventListener("click", event => {
      if (event.target.closest("button")) return;
      event.stopPropagation();
      if (selectedRouteDrops.has(dropSelectionKey)) {
        selectedRouteDrops.delete(dropSelectionKey);
      } else {
        clearActionSelections("route-drop");
        const hasOtherStopSelection = [...selectedRouteDrops]
          .some(key => parseRouteDropKey(key).fromStopId !== options.dropStopId);
        if (hasOtherStopSelection) clearRouteDropSelection();
        selectedRouteDrops.add(dropSelectionKey);
      }
      render();
    });
    line.addEventListener("dragstart", event => {
      if (!selectedRouteDrops.has(dropSelectionKey)) {
        clearActionSelections("route-drop");
        selectedRouteDrops.add(dropSelectionKey);
      }
      const allocationIds = selectedDropIdsForStop(options.dropStopId, allocation.id);
      dragged = {
        allocationId: allocation.id,
        allocationIds,
        fromRouteStopId: options.dropStopId,
        fromTruckId: options.dropTruckId || null,
        routeSplit: true,
        dropToHub: true
      };
      event.dataTransfer.setData("text/plain", allocationIds.join(","));
      event.dataTransfer.effectAllowed = "move";
    });
    line.addEventListener("dragend", () => {
      dragged = null;
    });
  }
  if (options.hubOutbound) {
    const outboundSelectionContext = options.preserveSourceSelection ? "location-source" : "hub-outbound";
    line.classList.add("is-hub-outbound-draggable");
    if (selectedHubOutboundItems.has(allocation.id)) {
      line.classList.add("is-selected");
    }
    line.draggable = true;
    line.addEventListener("click", event => {
      if (event.target.closest("button")) return;
      event.stopPropagation();
      if (selectedHubOutboundItems.has(allocation.id)) {
        selectedHubOutboundItems.delete(allocation.id);
      } else {
        clearActionSelections(outboundSelectionContext);
        selectedHubOutboundItems.add(allocation.id);
      }
      render();
    });
    line.addEventListener("dragstart", event => {
      if (!selectedHubOutboundItems.has(allocation.id)) {
        clearActionSelections(outboundSelectionContext);
        selectedHubOutboundItems.add(allocation.id);
      }
      const allocationIds = selectedHubOutboundIds(allocation.id);
      dragged = {
        allocationId: allocation.id,
        allocationIds,
        outboundAllocationIds: allocationIds,
        orderIds: options.preserveSourceSelection ? [...selectedSourceItems] : [],
        fromHubOutbound: !options.preserveSourceSelection,
        locationLoad: Boolean(options.preserveSourceSelection)
      };
      event.dataTransfer.setData("text/plain", allocationIds.join(","));
      event.dataTransfer.effectAllowed = "move";
    });
    line.addEventListener("dragend", () => {
      dragged = null;
    });
  }
  if (!options.readonly && isHubDestination(allocation.destination) && !isMovedFromHub) {
    line.addEventListener("click", event => {
      if (event.target.closest("button")) return;
      if (selectedAllocationItems.has(allocation.id)) {
        selectedAllocationItems.delete(allocation.id);
      } else {
        clearActionSelections("hub-inbound");
        selectedAllocationItems.add(allocation.id);
      }
      render();
    });
    line.addEventListener("dragstart", event => {
      const allocationIds = selectedAllocationItems.has(allocation.id)
        ? allocationSelectionIdsForDestination(allocation.destination, allocation.id)
        : [allocation.id];
      dragged = allocationIds.length > 1
        ? { allocationIds, fromHub: true }
        : { allocationId: allocation.id, fromHub: true };
      event.dataTransfer.setData("text/plain", allocationIds.join(","));
      event.dataTransfer.effectAllowed = "move";
    });
    line.addEventListener("dragend", () => {
      dragged = null;
    });
  }
  const showReturnTransfer = options.returnTransfer && !isMovedFromHub;
  const showLoad = !options.readonly && !options.hideActions && isHubDestination(allocation.destination) && !isMovedFromHub;
  const showUndo = !options.readonly && !options.hideActions && !isMovedFromHub;
  const showActions = showReturnTransfer || showLoad || showUndo;
  line.innerHTML = `
    <div>
      <strong>${allocation.order.product}</strong>
      <span>${allocation.order.code}</span>
      <b>${allocation.qty.toLocaleString()} แพ็ก</b>
    </div>
    ${showActions ? `
      <div class="allocation-actions">
        ${showReturnTransfer ? '<button type="button" data-action="return-transfer" aria-label="คืนสินค้ากลับรถเดิม">×</button>' : ""}
        ${showLoad ? '<button type="button" data-action="load" aria-label="โหลดขึ้นรถ">→</button>' : ""}
        ${showUndo ? '<button type="button" data-action="undo" aria-label="Undo">↩</button>' : ""}
      </div>
    ` : ""}
  `;
  line.querySelector('[data-action="undo"]')?.addEventListener("click", () => undoAllocation(allocation.id));
  line.querySelector('[data-action="return-transfer"]')?.addEventListener("click", event => {
    event.stopPropagation();
    const allocationIds = selectedHubOutboundIds(allocation.id)
      .filter(id => allocationById(id)?.allocation.status === "STAGED_IN_HUB");
    openReturnTransferQuantityModal(allocationIds);
  });
  line.querySelector('[data-action="load"]')?.addEventListener("click", () => {
    const allocationIds = allocationSelectionIdsForDestination(allocation.destination, allocation.id);
    if (allocationIds.length > 1) loadManyFromHubToTruck(allocationIds);
    else loadFromHubToTruck(allocation.id);
  });
  return line;
}

function sameTruckContinuation(truck, downstreamDestinations = []) {
  const card = document.createElement("article");
  card.className = "same-truck-card";
  if (downstreamDestinations.length) card.classList.add("has-route");
  card.dataset.truckId = truck.id;
  const downstreamAllocations = allocationsForTruck(truck.id)
    .filter(allocation => downstreamDestinations.includes(allocation.destination));
  const downstreamOrderIds = downstreamAllocations.map(allocation => allocation.order.id);
  card.dataset.routeOrderIds = routeIdsAttr([...truck.itemIds, ...downstreamOrderIds]);
  if (elementHasRouteOrder(card)) card.classList.add("is-route-highlight");
  const destinationOptions = calculateDestinationOptions(truck);
  const openItemCount = truckOpenItems(truck).length;
  const downstreamItemCount = downstreamAllocations
    .reduce((count, allocation) => count + (allocation.qty > 0 ? 1 : 0), 0);
  const routeItemCount = Math.max(openItemCount, downstreamItemCount);
  card.innerHTML = `
    <div>
      <span>รถคันเดิมไปต่อ</span>
      <strong>${truck.plate || "Dummy"}</strong>
    </div>
    <small>${routeItemCount.toLocaleString()} รายการยังอยู่ในรถ</small>
    <div class="same-truck-options">
      <b>ไปยัง</b>
    </div>
  `;
  const options = card.querySelector(".same-truck-options");
  if (!destinationOptions.length) {
    options.remove();
    return card;
  }
  destinationOptions.forEach(destination => {
    const button = document.createElement("button");
    button.type = "button";
    button.textContent = destinationLabel(destination);
    button.addEventListener("click", () => addDestinationPlaceholder(truck.id, destination));
    options.append(button);
  });
  return card;
}

function renderHubChildTrucks(parentTruckId, parentHubDestination) {
  return state.trucks
    .filter(truck => truck.parentTruckId === parentTruckId && truck.parentHubDestination === parentHubDestination)
    .map(truck => {
      const row = document.createElement("section");
      row.className = "hub-child-truck-row";
      row.append(truckCard(truck), flowArea(truck));
      return row;
    });
}

function drawConnectors() {
  const svg = els.truckCanvas.querySelector(".connector-layer");
  if (!svg) return;

  svg.querySelectorAll("path.connector-path").forEach(path => path.remove());
  const canvasRect = els.truckCanvas.getBoundingClientRect();
  const width = Math.max(els.truckCanvas.scrollWidth, els.truckCanvas.offsetWidth);
  const height = Math.max(els.truckCanvas.scrollHeight, els.truckCanvas.offsetHeight);
  svg.setAttribute("width", width);
  svg.setAttribute("height", height);
  svg.setAttribute("viewBox", `0 0 ${width} ${height}`);

  const point = (element, side = "right", yRatio = 0.5) => {
    const rect = element.getBoundingClientRect();
    const x = (side === "right" ? rect.right : rect.left) - canvasRect.left;
    const y = rect.top + rect.height * yRatio - canvasRect.top;
    return { x: x / zoomLevel, y: y / zoomLevel };
  };

  const draw = (from, to, options = {}) => {
    if (!from || !to) return;
    const start = point(from, options.fromSide || "right", options.fromYRatio ?? 0.5);
    const end = point(to, options.toSide || "left", options.toYRatio ?? 0.5);
    if (end.x <= start.x) return;
    const bend = Math.max(52, Math.min(120, (end.x - start.x) / 2));
    const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path.classList.add("connector-path");
    if (elementHasRouteOrder(from) && elementHasRouteOrder(to)) {
      path.classList.add("is-route-highlight");
    }
    path.setAttribute("d", `M ${start.x} ${start.y} C ${start.x + bend} ${start.y}, ${end.x - bend} ${end.y}, ${end.x} ${end.y}`);
    path.setAttribute("marker-end", "url(#connectorArrow)");
    svg.append(path);
  };

  const hasOptions = options => options && options.children.length > 0;
  const directChildren = (element, selector) => [...element.children].filter(child => child.matches(selector));

  const drawRow = row => {
    const truck = directChildren(row, ".truck-card")[0];
    const flow = directChildren(row, ".flow-area")[0];
    if (!truck || !flow) return;

    const destinations = directChildren(flow, ".destinations")[0];
    const options = directChildren(flow, ".destination-options")[0];
    const destinationNodes = destinations ? directChildren(destinations, ".destination-node") : [];
    const destinationCards = destinationNodes
      .map(node => directChildren(node, ".pickup-card, .destination-card, .hub-card")[0])
      .filter(Boolean);

    if (destinationCards.length) {
      draw(truck, destinationCards[0]);
      destinationCards.forEach((card, index) => {
        const nextCard = destinationCards[index + 1];
        const node = destinationNodes[index];
        const sameTruckCard = node ? directChildren(directChildren(node, ".hub-spawn-branch")[0] || node, ".same-truck-card")[0] : null;
        if (sameTruckCard && nextCard) {
          draw(sameTruckCard, nextCard);
        } else {
          draw(card, nextCard);
        }
      });
      if (hasOptions(options)) draw(destinationCards[destinationCards.length - 1], options);
    } else if (hasOptions(options)) {
      draw(truck, options);
    }

    destinationNodes.forEach(node => {
      const hubCard = directChildren(node, ".hub-card")[0];
      const hubBranch = directChildren(node, ".hub-spawn-branch")[0];
      if (!hubCard || !hubBranch) return;
      const branchTargets = [];
      directChildren(hubBranch, ".same-truck-card").forEach(card => branchTargets.push({ element: card }));
      const childRows = directChildren(hubBranch, ".hub-child-truck-row");
      childRows.forEach(childRow => {
        const childTruck = directChildren(childRow, ".truck-card")[0];
        const childFlow = directChildren(childRow, ".flow-area")[0];
        const hasChildRoute = childTruck && (
          childTruck.querySelector(".to-card:not(.is-muted)") ||
          (childFlow && childFlow.querySelector(".destination-node"))
        );
        if (hasChildRoute) branchTargets.push({ element: childTruck });
      });
      branchTargets.forEach((target, index) => {
        const ratio = branchTargets.length <= 1
          ? 0.5
          : 0.22 + (0.56 * index) / (branchTargets.length - 1);
        draw(hubCard, target.element, { fromYRatio: ratio });
      });
      childRows.forEach(childRow => {
        drawRow(childRow);
      });
    });
  };

  directChildren(els.truckCanvas, ".truck-row").forEach(drawRow);
}

function toCard(order, qty, options = {}) {
  const node = els.template.content.firstElementChild.cloneNode(true);
  node.dataset.orderId = order.id;
  node.dataset.routeOrderIds = order.id;
  if (options.truckId) node.dataset.truckId = options.truckId;
  if (options.muted) node.classList.add("is-muted");
  if (elementHasRouteOrder(node)) node.classList.add("is-route-highlight");
  node.querySelector(".to-product").textContent = order.product;
  node.querySelector(".to-code").textContent = order.code;
  node.querySelector(".to-customer").textContent = options.hideCustomer ? "" : order.customer;
  if (options.hideCustomer) node.querySelector(".to-customer").hidden = true;
  node.querySelector(".to-qty").textContent = `${qty.toLocaleString()} แพ็ก`;

  if (options.showTruckUndo) {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "item-undo";
    button.textContent = "↩";
    button.setAttribute("aria-label", "คืนสินค้ากลับต้นทาง");
    button.addEventListener("click", event => {
      event.stopPropagation();
      undoTruckLoad(options.truckId, order.id);
    });
    node.append(button);
  }

  if (options.sourceSelectable && selectedSourceItems.has(order.id)) {
    node.classList.add("is-selected");
  }

  if (options.sourceSelectable && order.allocations.length > 0) {
    const routeMenu = document.createElement("div");
    routeMenu.className = "route-menu";
    routeMenu.innerHTML = `
      <button type="button" class="route-menu-trigger" aria-label="เมนูสินค้า">...</button>
      <div class="route-menu-popover">
        <button type="button" data-action="show-route">${activeRouteOrderId === order.id ? "ซ่อนเส้นทางจัดส่ง" : "ดูเส้นทางจัดส่ง"}</button>
      </div>
    `;
    routeMenu.querySelector(".route-menu-trigger").addEventListener("click", event => {
      event.stopPropagation();
      node.classList.toggle("is-menu-open");
    });
    routeMenu.querySelector('[data-action="show-route"]').addEventListener("click", event => {
      event.stopPropagation();
      toggleRouteHighlight(order.id);
    });
    node.append(routeMenu);
  }

  if (!options.muted && qty > 0) {
    node.addEventListener("click", event => {
      if (event.target.closest(".route-menu")) return;
      if (options.sourceSelectable) {
        if (selectedSourceItems.has(order.id)) {
          selectedSourceItems.delete(order.id);
        } else {
          clearActionSelections("location-source");
          selectedSourceItems.add(order.id);
        }
        render();
        return;
      }
      if (options.truckId) {
        const key = truckSelectionKey(options.truckId, order.id);
        if (selectedTruckItems.has(key)) {
          selectedTruckItems.delete(key);
        } else {
          clearActionSelections("truck");
          selectedTruckItems.add(key);
        }
        selectedTruckItem = selectedTruckItems.size === 1 ? { truckId: options.truckId, orderId: order.id } : null;
        render();
        return;
      }
      const targetTruck = state.trucks[0];
      if (!targetTruck) {
        alert("กรุณาเพิ่มรถก่อนนำสินค้าขึ้นรถ");
        return;
      }
      openTruckLoadModal(targetTruck.id, order.id);
    });
    node.addEventListener("dragstart", event => {
      if (options.sourceSelectable) {
        if (!selectedSourceItems.has(order.id)) {
          clearActionSelections("location-source");
          selectedSourceItems.add(order.id);
        }
        const selectedIds = [...selectedSourceItems];
        const outboundIds = selectedLocationOutboundIds(activeOriginLocation);
        dragged = {
          orderIds: selectedIds,
          outboundAllocationIds: outboundIds,
          fromTruckId: null,
          locationLoad: true
        };
        event.dataTransfer.setData("text/plain", selectedIds.join(","));
      } else {
        if (options.truckId) {
          const key = truckSelectionKey(options.truckId, order.id);
          if (!selectedTruckItems.has(key)) {
            clearActionSelections("truck");
            selectedTruckItems.add(key);
          }
        }
        const selectedIds = options.truckId ? selectedOrderIdsForTruck(options.truckId, order.id) : [order.id];
        dragged = selectedIds.length > 1
          ? { orderIds: selectedIds, fromTruckId: options.truckId || null }
          : { orderId: order.id, fromTruckId: options.truckId || null };
        event.dataTransfer.setData("text/plain", selectedIds.join(","));
      }
      event.dataTransfer.effectAllowed = "move";
    });
    node.addEventListener("dragend", () => {
      dragged = null;
    });
  } else {
    node.draggable = false;
  }

  if (options.truckId && selectedTruckItems.has(truckSelectionKey(options.truckId, order.id))) {
    node.classList.add("is-selected");
  }

  return node;
}

function renderZoom() {
  els.truckCanvas.style.transform = `scale(${zoomLevel})`;
  els.truckCanvas.style.width = `${100 / zoomLevel}%`;
  els.truckCanvas.style.minHeight = `${960 * zoomLevel}px`;
  els.zoomLabel.textContent = `${Math.round(zoomLevel * 100)}%`;
  requestAnimationFrame(drawConnectors);
}

function addDropHandlers(card, truckId) {
  card.addEventListener("dragover", event => {
    if (dragged?.routeSplit && dragged.fromTruckId && dragged.fromTruckId !== truckId) {
      event.preventDefault();
      card.classList.add("is-over");
      return;
    }
    if (dragged?.fromHubOutbound) {
      event.preventDefault();
      card.classList.add("is-over");
      return;
    }
    event.preventDefault();
    card.classList.add("is-over");
  });
  card.addEventListener("dragleave", () => card.classList.remove("is-over"));
  card.addEventListener("drop", event => {
    event.preventDefault();
    card.classList.remove("is-over");
    if (!dragged || dragged.fromTruckId === truckId) return;
    if (dragged.locationLoad) {
      openLocationLoadQuantityModal(truckId, dragged.orderIds || [], dragged.outboundAllocationIds || dragged.allocationIds || []);
      return;
    }
    if (dragged.routeSplit && dragged.fromTruckId) {
      openRouteAllocationTransferModal(dragged.fromTruckId, truckId, dragged.allocationIds || [dragged.allocationId]);
      return;
    }
    if (dragged.fromHubOutbound) {
      openHubOutboundQuantityModal(dragged.allocationIds || [dragged.allocationId], truckId);
      return;
    }
    if (dragged.fromHub) {
      if (dragged.allocationIds?.length) loadManyFromHubToTruck(dragged.allocationIds, truckId);
      else loadFromHubToTruck(dragged.allocationId, truckId);
      return;
    }
    if (dragged.orderIds?.length) {
      openSourceToTruckQuantityModal(truckId, dragged.orderIds);
      return;
    }
    if (!dragged.orderId) return;
    const order = orderById(dragged.orderId);
    const available = dragged.fromTruckId ? qtyInTruck(order, dragged.fromTruckId) : unassignedQty(order);
    if (available <= 0) return;
    if (dragged.fromTruckId) moveBetweenTrucks(dragged.fromTruckId, truckId, dragged.orderId, available);
    else openSourceToTruckQuantityModal(truckId, [dragged.orderId]);
  });
}

function addDestinationDropHandlers(card, truckId, destination) {
  card.addEventListener("click", event => {
    if (event.target.closest("button") || event.target.closest(".allocation-line")) return;
    const orderIds = selectedOrderIdsForTruck(truckId, selectedTruckItem?.truckId === truckId ? selectedTruckItem.orderId : null);
    if (!orderIds.length) return;
    if (orderIds.length > 1) {
      allocateManyToDestination(truckId, destination, orderIds);
      return;
    }
    const order = orderById(orderIds[0]);
    if (!order || (!isHubDestination(destination) && order.customer !== destination)) {
      alert("สินค้านี้ไม่ตรงกับปลายทางที่เลือก");
      return;
    }
    openAllocationModal(truckId, destination, order.id);
  });
  card.addEventListener("dragover", event => {
    event.preventDefault();
    card.classList.add("is-over");
  });
  card.addEventListener("dragleave", () => card.classList.remove("is-over"));
  card.addEventListener("drop", event => {
    event.preventDefault();
    card.classList.remove("is-over");
    if (!dragged?.fromTruckId || dragged.fromTruckId !== truckId) return;

    if (dragged.orderIds?.length) {
      if (dragged.orderIds.length > 1) {
        allocateManyToDestination(truckId, destination, dragged.orderIds);
        return;
      }
      dragged.orderId = dragged.orderIds[0];
    }

    const order = orderById(dragged.orderId);
    if (!order || (!isHubDestination(destination) && order.customer !== destination)) {
      alert("สินค้านี้ไม่ตรงกับปลายทางที่เลือก");
      return;
    }
    openAllocationModal(truckId, destination, order.id);
  });
}

function moveBetweenTrucks(fromTruckId, toTruckId, orderId, qty) {
  const order = orderById(orderId);
  const fromTruck = truckById(fromTruckId);
  const toTruck = truckById(toTruckId);
  let remaining = qty;

  for (const allocation of order.allocations) {
    if (allocation.truckId !== fromTruckId || allocation.destination !== "TRUCK") continue;
    const moveQty = Math.min(allocation.qty, remaining);
    allocation.qty -= moveQty;
    remaining -= moveQty;
    if (remaining === 0) break;
  }

  order.allocations = order.allocations.filter(allocation => allocation.qty > 0);
  if (qtyInTruck(order, fromTruckId) === 0) {
    fromTruck.itemIds = fromTruck.itemIds.filter(id => id !== orderId);
    syncTruckOrigins(fromTruck);
  }
  if (!toTruck.itemIds.includes(orderId)) toTruck.itemIds.push(orderId);
  ensureOriginSequence(toTruck, order.origin);
  syncTruckOrigins(toTruck);

  order.allocations.push({
    id: `A-${state.nextAllocation++}`,
    truckId: toTruckId,
    destination: "TRUCK",
    status: "IN_TRUCK",
    qty,
    timestamp: Date.now()
  });

  render();
}

function openAllocationModal(truckId, destination, orderId) {
  const order = orderById(orderId);
  const max = qtyInTruck(order, truckId);

  closeQuantityModal();
  activeTruckLoad = null;
  activeAllocation = { truckId, destination, orderId };
  els.modalTitle.textContent = `ส่งไปยัง ${destination}`;
  els.modalOrderSummary.innerHTML = `
    <strong>${order.product}</strong><br>
    ${order.code}<br>
    ลูกค้า: ${order.customer}
  `;
  els.modalQty.max = max;
  els.modalQty.value = max;
  els.modalHelper.textContent = `เลือกได้สูงสุด ${max.toLocaleString()} แพ็ก ค่าเริ่มต้นคือจำนวนทั้งหมดที่เหลือในรถ`;
  els.dialog.showModal();
}

function createArrow() {
  const arrow = document.createElement("div");
  arrow.className = "arrow";
  return arrow;
}

function groupBy(items, key) {
  return items.reduce((groups, item) => {
    const value = item[key];
    groups[value] ||= [];
    groups[value].push(item);
    return groups;
  }, {});
}

function groupAllocations(allocations) {
  return allocations.reduce((groups, allocation) => {
    groups[allocation.destination] ||= [];
    groups[allocation.destination].push(allocation);
    return groups;
  }, {});
}

function groupAllocationsByOrigin(allocations) {
  return allocations.reduce((groups, allocation) => {
    groups[allocation.order.origin] ||= [];
    groups[allocation.order.origin].push(allocation);
    return groups;
  }, {});
}

function groupAllocationsByCustomer(allocations) {
  return allocations.reduce((groups, allocation) => {
    groups[allocation.order.customer] ||= [];
    groups[allocation.order.customer].push(allocation);
    return groups;
  }, {});
}

els.addTruckButton?.addEventListener("click", () => {
  const truck = createTruck("Dummy", "");
  state.nextTruck += 1;
  state.trucks.push(truck);
  render();
});

els.addTOButton?.addEventListener("click", openTOSelector);
els.addHubButton?.addEventListener("click", openHubSelector);
els.hubPickerSearch?.addEventListener("input", event => {
  hubPickerSearchText = event.target.value;
  renderHubSelector();
});
els.cancelHubPickerButton?.addEventListener("click", () => els.hubPickerDialog?.close());
els.closeHubPickerButton?.addEventListener("click", () => els.hubPickerDialog?.close());
els.toggleTOPanelButton?.addEventListener("click", () => {
  selectedTOCollapsed = !selectedTOCollapsed;
  renderSelectedTOs();
});
els.toPickerSearch?.addEventListener("input", event => {
  toPickerSearchText = event.target.value;
  renderTOSelector();
});
els.confirmTOPickerButton?.addEventListener("click", addSelectedTOs);
els.cancelTOPickerButton?.addEventListener("click", () => els.toPickerDialog?.close());
els.closeTOPickerButton?.addEventListener("click", () => els.toPickerDialog?.close());
els.mockTOButton?.addEventListener("click", createMockMultiOriginTO);

els.resetButton.addEventListener("click", () => {
  state = createInitialState();
  selectedTruckItem = null;
  selectedTruckItems.clear();
  selectedSourceItems.clear();
  selectedAllocationItems.clear();
  clearRoutePickupSelection();
  clearRouteDropSelection();
  clearHubOutboundSelection();
  activeHubId = null;
  draftTOSelection.clear();
  expandedTOSelection.clear();
  selectedTOCollapsed = false;
  mockTOCounter = 1;
  render();
});

els.zoomOutButton.addEventListener("click", () => {
  zoomLevel = Math.max(0.6, Number((zoomLevel - 0.1).toFixed(2)));
  renderZoom();
});

els.zoomInButton.addEventListener("click", () => {
  zoomLevel = Math.min(1.4, Number((zoomLevel + 0.1).toFixed(2)));
  renderZoom();
});

function confirmModal() {
  if (activeQuantityMove) {
    const qtyById = new Map();
    if (activeQuantityMove.items.length === 1) {
      const item = activeQuantityMove.items[0];
      const qty = Number(els.modalQty.value);
      if (qty <= 0 || qty > item.max) {
        els.modalHelper.innerHTML = `<span class="warning">จำนวนต้องอยู่ระหว่าง 1 ถึง ${item.max.toLocaleString()}</span>`;
        return;
      }
      qtyById.set(item.id, qty);
    } else {
      let hasQty = false;
      for (const input of els.modalOrderSummary.querySelectorAll(".batch-qty-row input")) {
        const item = activeQuantityMove.items.find(row => row.id === input.dataset.itemId);
        const qty = Number(input.value);
        if (!item || qty < 0 || qty > item.max) {
          els.modalHelper.innerHTML = `<span class="warning">จำนวนต้องอยู่ระหว่าง 0 ถึงจำนวนสูงสุดของแต่ละรายการ</span>`;
          return;
        }
        if (qty > 0) hasQty = true;
        qtyById.set(item.id, qty);
      }
      if (!hasQty) {
        els.modalHelper.innerHTML = `<span class="warning">กรุณาระบุจำนวนอย่างน้อย 1 รายการ</span>`;
        return;
      }
    }
    activeQuantityMove.onConfirm(qtyById);
    closeQuantityModal();
    els.dialog.close();
    return;
  }

  const orderId = activeTruckLoad?.orderId || activeAllocation?.orderId;
  const qty = Number(els.modalQty.value);
  const max = Number(els.modalQty.max);

  if (!orderId || qty <= 0 || qty > max) {
    els.modalHelper.innerHTML = `<span class="warning">จำนวนต้องอยู่ระหว่าง 1 ถึง ${max.toLocaleString()}</span>`;
    return;
  }

  if (activeTruckLoad) {
    selectedSourceItems.delete(orderId);
    addToTruck(activeTruckLoad.truckId, activeTruckLoad.orderId, qty);
    activeTruckLoad = null;
  } else {
    allocatePartial(activeAllocation.truckId, activeAllocation.destination, orderId, qty);
  }
  els.dialog.close();
}

els.allocationForm.addEventListener("submit", event => {
  event.preventDefault();
  confirmModal();
});

els.confirmModalButton.addEventListener("click", confirmModal);

els.closeModalButton.addEventListener("click", () => {
  closeQuantityModal();
  els.dialog.close();
});
els.cancelModalButton.addEventListener("click", () => {
  closeQuantityModal();
  els.dialog.close();
});

state = createInitialState();
render();
