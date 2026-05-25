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

let state;
let dragged = null;
let activeAllocation = null;
let activeTruckLoad = null;
let selectedTruckItem = null;
let selectedTruckItems = new Set();
let selectedSourceItems = new Set();
let selectedAllocationItems = new Set();
let activeRouteOrderId = null;
let draftTOSelection = new Set();
let expandedTOSelection = new Set();
let toPickerSearchText = "";
let selectedTOCollapsed = false;
let mockTOCounter = 1;
let zoomLevel = 1;

const els = {
  summaryStrip: document.querySelector("#summaryStrip"),
  selectedTOList: document.querySelector("#selectedTOList"),
  addTOButton: document.querySelector("#addTOButton"),
  toggleTOPanelButton: document.querySelector("#toggleTOPanelButton"),
  originList: document.querySelector("#originList"),
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

function createInitialState() {
  return {
    orders: structuredClone(initialOrders),
    trucks: [createTruck("Dummy", "")],
    nextTruck: 2,
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

function truckWeight(truck) {
  return truck.itemIds.reduce((sum, orderId) => {
    const order = orderById(orderId);
    return sum + qtyInTruck(order, truck.id) * order.weightPerPack;
  }, 0);
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

  order.allocations.push({
    id: `A-${state.nextAllocation++}`,
    truckId,
    destination: "TRUCK",
    status: "IN_TRUCK",
    qty,
    timestamp: Date.now()
  });

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
  renderSummary();
  renderSelectedTOs();
  renderOrigins();
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
  els.originList.innerHTML = "";
  Object.entries(grouped).forEach(([origin, orders]) => {
    const group = document.createElement("section");
    group.className = "origin-group";
    group.innerHTML = `<div class="to-stack"></div>`;
    group.prepend(sourceHeader(origin, availableSourceIds(orders), "origin-select"));
    const stack = group.querySelector(".to-stack");
    const customerGroups = groupBy(orders, "customer");
    Object.entries(customerGroups).forEach(([customer, customerOrders]) => {
      stack.append(sourceHeader(customer, availableSourceIds(customerOrders), "customer-select"));
      customerOrders.forEach(order => stack.append(toCard(order, unassignedQty(order), {
        muted: unassignedQty(order) === 0,
        hideCustomer: true,
        sourceSelectable: true
      })));
    });
    els.originList.append(group);
  });
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
    <div class="drop-zone">ลากสินค้าที่ต้องการขนมาวางที่นี่</div>
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

  const sequence = originSequence(truck);
  if (sequence) {
    truckCard.querySelector(".to-stack").before(sequence);
  }
  renderTruckItems(truck, truckCard.querySelector(".to-stack"));

  addDropHandlers(truckCard, truck.id);
  return truckCard;
}

function flowArea(truck) {
  const flowArea = document.createElement("div");
  flowArea.className = "flow-area";

  const truckAllocations = allocationsForTruck(truck.id);
  const hasDestinations = truck.destinations.length || truckAllocations.some(allocation => allocation.destination !== "TRUCK");
  const hasHubStop = truck.destinations.some(isHubDestination) || truckAllocations.some(allocation => isHubDestination(allocation.destination));
  if (hasDestinations) {
    flowArea.append(destinationList(truck));
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

  return flowArea;
}

function renderTruckItems(truck, stack) {
  const grouped = truckItemsByOrigin(truck);
  planOrigins(truck).forEach(origin => {
    const orders = grouped[origin] || [];
    if (!orders.length) return;
    const title = document.createElement("h3");
    title.textContent = origin;
    title.className = "truck-origin-title";
    stack.append(title);

    const customerGroups = groupBy(orders, "customer");
    Object.entries(customerGroups).forEach(([customer, customerOrders]) => {
      const customerTitle = document.createElement("h4");
      customerTitle.textContent = customer;
      customerTitle.className = "truck-customer-title";
      stack.append(customerTitle);
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

function destinationList(truck) {
  const destinations = document.createElement("div");
  destinations.className = "destinations";

  const grouped = groupAllocations(allocationsForTruck(truck.id).filter(allocation => allocation.destination !== "TRUCK"));
  const names = [...new Set([...truck.destinations, ...Object.keys(grouped)])];
  names.forEach((destination, index) => {
    const allocations = grouped[destination] || [];
    const node = document.createElement("div");
    node.className = "destination-node";
    if (isHubDestination(destination)) node.classList.add("has-hub-spawn");
    const card = document.createElement("article");
    card.className = isHubDestination(destination) ? "hub-card" : "destination-card";
    card.dataset.truckId = truck.id;
    card.dataset.destination = destination;
    card.dataset.routeOrderIds = routeIdsAttr(allocations.map(allocation => allocation.order.id));
    if (elementHasRouteOrder(card)) card.classList.add("is-route-highlight");
    card.innerHTML = `
      <div class="destination-head">
        <h3>${destinationLabel(destination)}</h3>
        <div class="destination-tools">
          <button type="button" data-action="move-left" ${index === 0 ? "disabled" : ""} aria-label="เลื่อนไปก่อนหน้า">‹</button>
          <button type="button" data-action="move-right" ${index === names.length - 1 ? "disabled" : ""} aria-label="เลื่อนไปถัดไป">›</button>
          <button type="button" data-action="remove" aria-label="ลบปลายทาง">×</button>
        </div>
      </div>
      <div class="destination-items"></div>
      <p class="status-note">${isHubDestination(destination) ? "STAGED_IN_HUB" : "ASSIGNED"}</p>
    `;
    card.querySelector('[data-action="move-left"]').addEventListener("click", event => {
      event.stopPropagation();
      moveDestination(truck.id, index, -1);
    });
    card.querySelector('[data-action="move-right"]').addEventListener("click", event => {
      event.stopPropagation();
      moveDestination(truck.id, index, 1);
    });
    card.querySelector('[data-action="remove"]').addEventListener("click", event => {
      event.stopPropagation();
      removeDestination(truck.id, destination);
    });
    addDestinationDropHandlers(card, truck.id, destination);
    const items = card.querySelector(".destination-items");
    allocations.forEach(allocation => {
      const isMovedFromHub = allocation.status === "MOVED_FROM_HUB";
      const line = document.createElement("div");
      line.className = "allocation-line";
      line.dataset.routeOrderIds = allocation.order.id;
      if (isMovedFromHub) line.classList.add("is-muted");
      if (elementHasRouteOrder(line)) line.classList.add("is-route-highlight");
      if (selectedAllocationItems.has(allocation.id)) line.classList.add("is-selected");
      line.draggable = isHubDestination(allocation.destination) && !isMovedFromHub;
      if (isHubDestination(allocation.destination) && !isMovedFromHub) {
        line.addEventListener("click", event => {
          if (event.target.closest("button")) return;
          if (selectedAllocationItems.has(allocation.id)) {
            selectedAllocationItems.delete(allocation.id);
          } else {
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
      line.innerHTML = `
        <div>
          <strong>${allocation.order.product}</strong>
          <span>${allocation.order.code}</span>
          <b>${allocation.qty.toLocaleString()} แพ็ก</b>
        </div>
        <div class="allocation-actions">
          ${isHubDestination(allocation.destination) && !isMovedFromHub ? '<button type="button" data-action="load" aria-label="โหลดขึ้นรถ">→</button>' : ""}
          ${!isMovedFromHub ? '<button type="button" data-action="undo" aria-label="Undo">↩</button>' : ""}
        </div>
      `;
      line.querySelector('[data-action="undo"]')?.addEventListener("click", () => undoAllocation(allocation.id));
      line.querySelector('[data-action="load"]')?.addEventListener("click", () => {
        const allocationIds = allocationSelectionIdsForDestination(allocation.destination, allocation.id);
        if (allocationIds.length > 1) loadManyFromHubToTruck(allocationIds);
        else loadFromHubToTruck(allocation.id);
      });
      items.append(line);
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
    destinations.append(node);
  });

  return destinations;
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
      .map(node => directChildren(node, ".destination-card, .hub-card")[0])
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
        const selectedIds = selectedSourceItems.has(order.id) ? [...selectedSourceItems] : [order.id];
        dragged = { orderIds: selectedIds, fromTruckId: null };
        event.dataTransfer.setData("text/plain", selectedIds.join(","));
      } else {
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
    event.preventDefault();
    card.classList.add("is-over");
  });
  card.addEventListener("dragleave", () => card.classList.remove("is-over"));
  card.addEventListener("drop", event => {
    event.preventDefault();
    card.classList.remove("is-over");
    if (!dragged || dragged.fromTruckId === truckId) return;
    if (dragged.fromHub) {
      if (dragged.allocationIds?.length) loadManyFromHubToTruck(dragged.allocationIds, truckId);
      else loadFromHubToTruck(dragged.allocationId, truckId);
      return;
    }
    if (dragged.orderIds?.length) {
      if (dragged.orderIds.length === 1) {
        openTruckLoadModal(truckId, dragged.orderIds[0]);
        return;
      }
      addManyToTruck(truckId, dragged.orderIds);
      return;
    }
    const order = orderById(dragged.orderId);
    const available = dragged.fromTruckId ? qtyInTruck(order, dragged.fromTruckId) : unassignedQty(order);
    if (available <= 0) return;
    if (dragged.fromTruckId) moveBetweenTrucks(dragged.fromTruckId, truckId, dragged.orderId, available);
    else openTruckLoadModal(truckId, dragged.orderId);
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

els.addTruckButton?.addEventListener("click", () => {
  const truck = createTruck("Dummy", "");
  state.nextTruck += 1;
  state.trucks.push(truck);
  render();
});

els.addTOButton?.addEventListener("click", openTOSelector);
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

els.closeModalButton.addEventListener("click", () => els.dialog.close());
els.cancelModalButton.addEventListener("click", () => els.dialog.close());

state = createInitialState();
render();
